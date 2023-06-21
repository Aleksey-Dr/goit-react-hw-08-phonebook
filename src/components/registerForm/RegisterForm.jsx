import { useState } from 'react'
import { useDispatch } from "react-redux";

import clsx from 'clsx';
import css from './RegisterForm.module.css';

import Title from '../title';
import { register } from '../../redux/operations';

const RegisterForm = () => {
  const despatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    despatch(register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

    return (
        <div>
            <Title>Signup</Title>
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

              <label htmlFor={email}>
                Email
                <input
                  className={clsx(css.input)}
                  type="email"
                  name="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title='Email must be in the following order: characters@characters.domain (characters followed by an @ sign, followed by more characters, and then a "."'
                  required
                  value={email}
                  onChange={handleChange}
                />
              </label>
                      
              <label htmlFor={password}>
                Password
                <input
                  className={clsx(css.input)}
                  type="password"
                  name="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title='Password must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters'
                  required
                  value={password}
                  onChange={handleChange}
                />
              </label>
              <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default RegisterForm;