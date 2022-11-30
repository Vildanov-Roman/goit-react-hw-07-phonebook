import { useDispatch, useSelector } from 'react-redux';
import css from './Form/Form.module.css';
import { filterContscts } from 'redux/Contacts/filterSlice';

export const Filter = () => {
  const name = useSelector(state => state.filter.data);
  const dispatch = useDispatch();
  const handlerInput = evt => {
    dispatch(filterContscts(evt.target.value));
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
