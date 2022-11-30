import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter';
import Form from './Form/Form';
import { useSelector } from 'react-redux';
import { Loader } from './Loader/Loader';

export const App = () => {
  const loading = useSelector(state => state.contacts.isLoading);

  return (
    <>
      <div className="container">
        <h1 className="mainText">Phonebook</h1>
        <Form />
        <h2 className="mainText">Contacts</h2>
        <Filter />
        <ContactList />
        {loading && <Loader />}
      </div>
    </>
  );
};
