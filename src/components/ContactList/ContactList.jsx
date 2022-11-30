import { useDispatch } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { ContactItem } from './ContactItem';
import css from './Contacts.module.css';
import { useEffect } from 'react';
import { fetchContacts, deleteContacts } from 'redux/Contacts/operations';
import { getContacts, getFilter } from 'redux/Contacts/selectors';

export const ContactList = () => {
  // const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  // const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handlerDelete = id => {
    dispatch(deleteContacts(id));
  };

  const getVisibleContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filter) =>
      contacts.filter(el =>
        el.name.toLowerCase().includes(filter.toLowerCase())
      )
  );

  return (
    <ul className={css.contacts__list}>
      {getVisibleContacts.map(({ id, name, number }) => (
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
