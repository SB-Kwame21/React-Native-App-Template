import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


// using useReducer and createContext to manage the state of the contacts
const initialContacts = [
  { id: 0, name: 'Sara Lee' },
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jack Doe' },
];
let nextId = 3;

const contactsStore = React.createContext([]);
const { Provider } = contactsStore;

function ContactsProvider({ children }) {
  const [contacts, dispatch] = React.useReducer(contactReducer, []);

  React.useEffect(() => {
    getContacts();
  }, []);

  async function getContacts() {
    const contacts = await AsyncStorage.getItem('@contacts');

    if (contacts === null) {
      AsyncStorage.setItem('@contacts', JSON.stringify(initialContacts));
      dispatch({ type: 'SET_CONTACT', contacts: initialContacts });

    } else {
      dispatch({ type: 'SET_CONTACT', contacts: JSON.parse(contacts) })

    }
  }

  function handleAddContact(name) {
    dispatch({ type: 'ADD', id: Math.random(), name });
  }
  function handleDeleteContact(id) {
    dispatch({ type: 'DELETE', id });
  }
  function handleChangeContact(contact) {
    dispatch({ type: 'CHANGE', contact });
  }

  return (
    <Provider
      value={{
        contacts,
        handleAddContact,
        handleDeleteContact,
        handleChangeContact,
      }}
    >
      {children}
    </Provider>
  );
}
export { ContactsProvider, contactsStore };


// Using Switch Statment // Convention
export function contactReducer(contacts, action) {
  switch (action.type) {
    case 'SET_CONTACT': {
      return action.contacts;
    }
    case 'ADD': {
      const newContacts = [...contacts, { id: action.id, name: action.name }];

      // Save new value to local Storage
      AsyncStorage.setItem('@contacts', JSON.stringify(newContacts));

      return newContacts;
    }
    case 'DELETE': {
      const newContacts = contacts.filter(contact => contact.id !== action.id);

      // Save new value to local Storage
      AsyncStorage.setItem('@contacts', JSON.stringify(newContacts));

      return newContacts;
    }
    case 'CHANGE': {
      return contacts.map(c => (c.id === action.contact.id ? action.contact : c));
    }
    default: {
      throw new Error('Unhandled action type: ' + action.type);
    }
  }
}

// using if statements to manage the state of the contacts
/*
function contactReducer(contacts, action) {
  if (action.type === 'ADD') {
    return [...contacts, { id: action.id, name: action.name }];

  } else if (action.type === 'DELETE') {
    return contacts.filter(contact => contact.id !== action.id);

  } else if (action.type === 'CHANGE') {
    return contacts.map(c => (c.id === action.contact.id ? action.contact : c));

  } else {
    throw new Error('Unknown action type: ' + action.type);
  }
}
*/
