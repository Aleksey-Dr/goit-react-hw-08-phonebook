import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Container from './container';
import AppBar from './appBar/AppBar';
import PrivateRoute from './privateRoute';
import RestrictedRoute from './restrictedRoute';
import { fetchCurrentUser } from '../redux/operations';
import { selectIsRefreshing } from '../redux/selectors';
import Loader from './loader';

const Home = lazy(() => import('../pages/home/'));
const Register = lazy(() => import('../pages/register/'));
const Login = lazy(() => import('../pages/login/'));
const Contacts = lazy(() => import('../pages/contacts/'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b><Loader /></b>
  ) : (
    <Container>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home/>} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Register/>} />
            } />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            } />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            } />
        </Route>
      </Routes>
    </Container>
  );
};
