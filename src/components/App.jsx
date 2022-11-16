import { ContactList } from './Contacts/ContactsList';
import { Filter } from './Filter';
import FormContacts from './Form/Form';

export const App = () => {
  return (
    <>
      <div className="container">
        <h1 className="mainText">Phonebook</h1>
        <FormContacts />
        <h2 className="mainText">Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};
