import { useSelector, useDispatch } from 'react-redux';
import { ContactListItem } from './ContactItem';
import css from './Contacts.module.css';
import { useEffect } from 'react';
import { getContacts } from 'redux/Contacts/operations';
import { deleteContacts } from 'redux/Contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handlerDelete = id => {
    dispatch(deleteContacts(id));
  };

  const getContactList = () => {
    return contacts.filter(user =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul className={css.contacts__list}>
      {getContactList()?.map(({ id, name, number }) => (
        <ContactListItem
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
