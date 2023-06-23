import { useDispatch, useSelector } from "react-redux";

import clsx from 'clsx';
import css from './UserMenu.module.css';

import { selectUserName } from '../../redux/selectors'
import { logOut } from '../../redux/operations';

const UserMenu = () => {
    const despatch = useDispatch();
    const name = useSelector(selectUserName);

    return (
        <div className={clsx(css["user-menu"])}>
            <p>{name}</p>
            <button onClick={() => despatch(logOut())} className={clsx(css.btn)}>Logout</button>
        </div>
    );
};

export default UserMenu;