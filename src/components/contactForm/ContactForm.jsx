import { useDispatch, useSelector } from "react-redux";

import { useState } from 'react';

import clsx from 'clsx';
import css from './ContactForm.module.css';

import { addContact } from '../../redux/operations';
import { selectItems } from '../../redux/selectors';

const ContactForm = () => {

  const despatch = useDispatch();
  const contacts = useSelector(selectItems);
  const onAddContact = (name, number, id) =>
    despatch(addContact(name, number, id));

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (contacts.find(contact =>
      contact.name === name)) {
        alert(name + ' is already in contacts');
        return;
      }

    onAddContact({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <form className={clsx(css.form)} onSubmit={handleSubmit}>
      <label htmlFor={name}>
        Name
        <input
          className={clsx(css.input)}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>

      <label htmlFor={number}>
        Number
        <input
          className={clsx(css.input)}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;