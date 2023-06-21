import { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from "react-router-dom";

import UserMenu from '../userMenu';

import clsx from 'clsx';
import css from './AppBar.module.css';

const AppBar = () => {
    const location = useLocation();

    return (
        <>
            <header>
                <div className={clsx(css.hat)}>
                    <nav className={clsx(css.nav)}>
                    <NavLink
                        className={location.pathname !== "/"
                            ? clsx(css.btn)
                            : clsx(css["btn-current"])}
                        to="/">
                        Home
                    </NavLink>
                    <NavLink
                        className={location.pathname !== "/register"
                            ? clsx(css.btn)
                            : clsx(css["btn-current"])}
                        to="/register">
                        Register
                    </NavLink>
                    <NavLink
                        className={location.pathname !== "/login"
                            ? clsx(css.btn)
                            : clsx(css["btn-current"])}
                        to="/login">
                        Login
                    </NavLink>
                    <NavLink
                        className={location.pathname !== "/contacts"
                            ? clsx(css.btn)
                            : clsx(css["btn-current"])}
                        to="/contacts">
                        Contacts
                    </NavLink>
                </nav>
                <UserMenu />
                </div>
            </header>
            <main>
                <Suspense>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
};

export default AppBar;