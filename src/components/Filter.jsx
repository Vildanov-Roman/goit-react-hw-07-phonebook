import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/slice';

import css from './Form/Form.module.css';

export const Filter = () => {
  const name = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handlerFilter = evt => {
    dispatch(filterContact(evt.target.value));
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
          onChange={handlerFilter}
        />
      </label>
    </form>
  );
};
