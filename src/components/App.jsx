import { useState, useEffect } from 'react';
import { ContactList } from './Contacts/ContactsList';
import { Filter } from './Filter';
import FormContacts from './Form/Form';

const contactsLict = 'contactList';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(contactsLict)) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(contactsLict, JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const addUserData = user => {
    if (
      contacts.some(
        option => option.name.toLowerCase() === user.name.toLowerCase()
      )
    ) {
      alert(`${user.name} is already in contacts.`);
      return;
    } else if (contacts.some(option => option.number === user.number)) {
      alert(`${user.number} is already in contacts.`);
      return;
    }
    setContacts(prevState => [...prevState, user]);
  };

  const getContactList = () => {
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));
  }

  const handlerFilter = evt => {
    const { value } = evt.target;
    setFilter(value);
  };

  return (
    
      <div className="container">
        <h1 className="mainText">Phonebook</h1>

        <FormContacts addUserData={addUserData} />
        <h2 className="mainText">Contacts</h2>

        <Filter handlerFilter={handlerFilter} />
        {contacts.length === 0 ? (
          <h3>Please, add new contact</h3>
          ) : (
            <ContactList contactList={getContactList()} onDelete={deleteContact} />
        )}
      </div>
    
  );
};  
