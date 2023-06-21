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
              <button type="submit">Signin</button>
            </form>
        </div>
    );
};

export default LoginForm;