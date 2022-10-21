import PropTypes from 'prop-types';
import { Component } from 'react';
import { Formik, Form, Field, } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import css from './Form.module.css';

const schema = yup.object().shape({
  name: yup
    .string()
    .required(),
  number: yup
    .number()
    .required()
    .positive(),
});

export class FormContacts extends Component {
  static propTypes = {
    addUserData: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const id = nanoid();
    const user = { ...this.state, id };
    this.props.addUserData(user);

    this.reset();   
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const initialValues = this.state;

    return (
      <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={this.handleSubmit1}>
          <Form className={css.form} onSubmit={this.handleSubmit}>
            <label htmlFor='name' className={css.label}>Name</label>
            <Field
              className={css.input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Taras Shevchenko"
              required
            />            
            <label htmlFor='number' className={css.label}>Number</label>
            <Field
              className={css.input}
              type="tel"  
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Enter the number in the format +ХХХХХХХХХХХХ"
              placeholder="+XXXXXXXXXXXX"
              required
            />
            <button className={css.btn} type="submit">
              Add contact
            </button>
          </Form>
        </Formik>
      </>
    );
  }
}

