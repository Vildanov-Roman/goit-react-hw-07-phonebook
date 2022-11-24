import { useDispatch, useSelector } from 'react-redux';
import css from './Form/Form.module.css';
import { filterContacts } from 'redux/Contacts/actions';

export const Filter = () => {
  const name = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const handlerInput = evt => {
    dispatch(filterContacts(evt.target.value));
  };

  return (
    <form className={css.form}>
      <label className={css.label}>
        Find Contacts by name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handlerInput}
        />
      </label>
    </form>
  );
};
