import clsx from 'clsx';
import css from './LoginForm.module.css';
import Title from '../title';

const LoginForm = () => {
    return (
        <div>
            <Title>Signin</Title>
            <form className={clsx(css.form)} onSubmit="">
              <label htmlFor="">
                Email
                <input
                  className={clsx(css.input)}
                  type="email"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  value=""
                  onChange=""
                />
              </label>
                      
              <label htmlFor="">
                Password
                <input
                  className={clsx(css.input)}
                  type="password"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  value=""
                  onChange=""
                />
              </label>
              <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default LoginForm;