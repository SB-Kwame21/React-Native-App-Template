import * as React from 'react';
import {
  Button,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import { Colors } from '../constants/colors';
import MyInput from './MyInput';
import { FontAwesome } from '@expo/vector-icons';
import { getRandomPhoto } from '../utils/randomPhoto'

import { globalStyles } from '../styles/global';
import { contactsStore } from '../reducers/contactReducer';


// using props
/*
export default function ContactLists({
  contacts,
  onChangeContact,
  onDeleteContact,

}) {
  return (
    <ScrollView>
      {contacts.map((contact, index) => (
        <Contact
          key={index}
          contact={contact}
          onChange={onChangeContact}
          onDelete={onDeleteContact}
        />
      ))}
    </ScrollView>
  );
}

// using props
function Contact({ contact, onChange, onDelete }) {
  const [isEditing, setIsEditing] = React.useState(false);

  // conditional content to display
  let contactContent;

  // we use useMemo to avoid re-rendering the photo component
  const memoPhoto = React.useMemo(() => getRandomPhoto(), []);

  if (isEditing) {
    contactContent = (
      <View>
        <MyInput
          value={contact.name}
          onChangeText={text => onChange({ ...contact, name: text })}
        />
      </View>
    );
  } else {
    contactContent = (
      <View style={styles.row}>
        <Text style={styles.name}>{contact.name}</Text>
      </View>
    );
  }
  return (
    <View style={styles.contactContainer}>
      <View style={styles.row}>
        <Image source={memoPhoto} style={styles.image} />
        {contactContent}
      </View>

      <View style={styles.row}>
        {isEditing ? (
          <Button title="Save" onPress={() => setIsEditing(false)} />
        ) : (
          <Pressable onPress={() => setIsEditing(true)}>
            <FontAwesome
              name="edit"
              size={24}
              color={Colors.secondary}
              style={{ marginRight: 15, marginTop: 5 }}
            />
          </Pressable>
        )}
        <Pressable onPress={() => onDelete(contact.id)}>
          <FontAwesome name="trash" size={24} color={Colors.secondary} />
        </Pressable>
      </View>
    </View>
  );
}
*/


// using context
export default function ContactLists() {
  const { contacts } = React.useContext(contactsStore);

  if (contacts.length === 0)
    return <Text
      style={[globalStyles.title, { textAlign: 'center' }]}
    >You don't have any contacts!</Text>;

  return (
    <ScrollView>
      {contacts.map(
        (contact, index) => contact && <Contact key={index} contact={contact} />
      )}
    </ScrollView>
  );
}

// using context
function Contact({ contact }) {
  const { handleChangeContact, handleDeleteContact } = React.useContext(contactsStore);
  const [isEditing, setIsEditing] = React.useState(false);

  // conditional content to display
  let contactContent;

  // we use useMemo to avoid re-rendering the photo component
  const memoPhoto = React.useMemo(() => getRandomPhoto(), []);

  if (isEditing) {
    contactContent = (
      <View>
        <MyInput
          value={contact.name}
          onChangeText={text => handleChangeContact({ ...contact, name: text })}
        />
      </View>
    );
  } else {
    contactContent = (
      <View style={styles.row}>
        <Text style={styles.name}>{contact.name}</Text>
      </View>
    );
  }
  return (
    <View style={styles.contactContainer}>
      <View style={styles.row}>
        <Image source={memoPhoto} style={styles.image} />
        {contactContent}
      </View>

      <View style={styles.row}>
        {isEditing ? (
          <Button title="Save" onPress={() => setIsEditing(false)} />
        ) : (
          <Pressable onPress={() => setIsEditing(true)}>
            <FontAwesome
              name="edit"
              size={24}
              color={Colors.secondary}
              style={{ marginRight: 15, marginTop: 5 }}
            />
          </Pressable>
        )}
        <Pressable onPress={() => handleDeleteContact(contact.id)}>
          <FontAwesome name="trash" size={24} color={Colors.secondary} />
        </Pressable>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  contactContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.gray,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.dark,
  },
});
