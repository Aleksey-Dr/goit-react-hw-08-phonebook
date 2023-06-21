import clsx from 'clsx';
import css from './UserMenu.module.css';

const UserMenu = () => {
    return (
        <div className={clsx(css["user-menu"])}>
            <p>mango@mail.com</p>
            <button className={clsx(css.btn)}>Logout</button>
        </div>
    );
};

export default UserMenu;