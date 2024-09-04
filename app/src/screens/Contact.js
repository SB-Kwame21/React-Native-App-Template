import * as React from 'react';
import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";

import AddContact from '../components/AddContact';
import ContactLists from '../components/ContactLists';
import { ContactsProvider, contactReducer } from '../reducers/contactReducer';


export default function Contact({ navigation }) {
    // Using Context

    return (
        <ContactsProvider>
            <View style={globalStyles.simpleContainer}>
                <AddContact />
                <ContactLists />
            </View>
        </ContactsProvider>
    );


    // Using Reducer
    /*
    const [contacts, dispatch] = React.useReducer(contactReducer, initialContacts);

    // Add contacts
    function handleAddContact(name) {
        dispatch({ type: 'ADD', id: nextId++, name });
    }
    // Delete Contacts
    function handleDeleteContact(id) {
        dispatch({ type: 'DELETE', id });
    }
    // Update Contacts
    function handleChangeContact(contact) {
        dispatch({ type: 'CHANGE', contact });
    }
    */

    //   Using state
    /* 
    const [contacts, setContacts] = React.useState(initialContacts);

    // Add contacts
    function handleAddContact(name) {
        setContacts([...contacts, { id: nextId++, name }]);
    }
    // Delete Contacts
    function handleDeleteContact(id) {
        setContacts(contacts.filter(contact => contact.id !== id));
    }
    // Update Contacts
    function handleChangeContact(contact) {
        setContacts(contacts.map(c => (c.id === contact.id ? contact : c)));
    }
    

    React.useEffect(() => {
        // Top Tap Events & Methods
        const unsubscriber = navigation.addListener("tabPress", e => {
            console.log(e)
        });

        return unsubscriber;
    }, [navigation])


    return (
        <View style={globalStyles.simpleContainer}>
            <AddContact onAddContact={handleAddContact} />
            <ContactLists
                contacts={contacts}
                onChangeContact={handleChangeContact}
                onDeleteContact={handleDeleteContact}
            />
        </View>
    );
    */
}

let nextId = 3;
const initialContacts = [
    { id: 0, name: 'Sara Lee' },
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jack Doe' },
];
