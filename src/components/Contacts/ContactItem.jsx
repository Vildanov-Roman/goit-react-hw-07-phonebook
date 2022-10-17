import PropTypes from 'prop-types';
import css from './Contacts.module.css'


export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.contacts__item} key={id}>
      <p>
        {name}: {number}
      </p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};