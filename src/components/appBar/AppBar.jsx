import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

import UserMenu from '../userMenu';
import Navigation from '../navigation';

import { selectIsLoggedIn } from '../../redux/selectors';

import clsx from 'clsx';
import css from './AppBar.module.css';

const AppBar = () => {
    const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <header>
        <div className={clsx(css.hat)}>
          <Navigation />

          {isLoggedIn ? 
            <UserMenu />
           : (
            <nav className={clsx(css.nav)}>
              <NavLink
                className={
                  location.pathname !== '/register'
                    ? clsx(css.btn)
                    : clsx(css['btn-current'])
                }
                to="/register"
              >
                Register
              </NavLink>
              <NavLink
                className={
                  location.pathname !== '/login'
                    ? clsx(css.btn)
                    : clsx(css['btn-current'])
                }
                to="/login"
              >
                Login
              </NavLink>
            </nav>
          )}
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
