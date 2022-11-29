import { useSelector, useDispatch } from 'react-redux';
import { ContactItem } from './ContactItem';
import css from './Contacts.module.css';
import { useEffect } from 'react';
import { fetchContacts, deleteContacts } from 'redux/Contacts/operations';
import { getContacts, getFilter } from 'redux/Contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handlerDelete = id => {
    dispatch(deleteContacts(id));
  };

  const getContactList = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul className={css.contacts__list}>
      {getContactList()?.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDelete={handlerDelete}
          id={id}
        />
      ))}
    </ul>
  );
};
