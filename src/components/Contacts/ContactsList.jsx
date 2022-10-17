import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
import css from './Contacts.module.css';

export const ContactList = ({ contactList, onDelete }) => {
  return (
    <ul className={css.contacts__list}>
      {contactList.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDelete={onDelete}
          id={id}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};