import { useSelector, useDispatch } from 'react-redux';
import { ContactItem } from './ContactItem';
import css from './Contacts.module.css';
import { useEffect } from 'react';
import { fetchContacts, deleteContacts } from 'redux/Contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.data);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handlerDelete = id => {
    dispatch(deleteContacts(id));
  };

  const getContactList = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
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
