import * as React from 'react';
import { View, Text, Button, Pressable } from "react-native";
import { globalStyles } from "../styles/global";
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../features/contacts/contact';


export default function ContactRedux({ navigation }) {
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    function handleLongPress(id) {
        dispatch(deleteContact(id));
    }

    return (
        <View style={globalStyles.simpleContainer}>
            <Text>Contacts Redux</Text>

            {contacts.map((i, index) => (
                <Pressable key={index} onLongPress={() => handleLongPress(i.id)}>
                    <Text style={globalStyles.title}>{i.name}</Text>
                </Pressable>
            ))}
        </View>
    );
}