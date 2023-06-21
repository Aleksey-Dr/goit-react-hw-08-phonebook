import { NavLink, useLocation } from 'react-router-dom';

import clsx from 'clsx';
import css from './Navigation.module.css';

const Navigation = () => {
    const location = useLocation();

    return (
        <>
            <nav className={clsx(css.nav)}>
                <NavLink
                    className={location.pathname !== "/"
                        ? clsx(css.btn)
                        : clsx(css["btn-current"])}
                    to="/">
                    Home
                </NavLink>

                <NavLink
                    className={location.pathname !== "/contacts"
                        ? clsx(css.btn)
                        : clsx(css["btn-current"])}
                    to="/contacts">
                    Contacts
                </NavLink>
            </nav>
        </>
    );
};

export default Navigation;