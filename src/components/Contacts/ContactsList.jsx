import { deleteContact } from 'redux/slice';
import { useSelector, useDispatch } from 'react-redux';
import { ContactItem } from './ContactItem';
import css from './Contacts.module.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handlerDelete = id => {
    dispatch(deleteContact(id));
  };

  const getContactList = () => {
    console.log(contacts);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul className={css.list}>
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
