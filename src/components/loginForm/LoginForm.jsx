import { useState } from 'react'
import { useDispatch } from "react-redux";

import clsx from 'clsx';
import css from './LoginForm.module.css';
import Title from '../title';

import { logIn } from '../../redux/operations';

const LoginForm = () => {
    const despatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = event => {
    const { name, value } = event.currentTarget;
    
    switch (name) {
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

        despatch(logIn({ email, password }));

        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <Title>Signin</Title>
            <form className={clsx(css.form)} onSubmit={handleSubmit}>
              <label htmlFor={email}>
                Email
                <input
                  className={clsx(css.input)}
                  type="email"
                  name="email"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title=""
                  required
                  value={password}
                  onChange={handleChange}
                />
              </label>
              <button type="submit">Signin</button>
            </form>
        </div>
    );
};

export default LoginForm;