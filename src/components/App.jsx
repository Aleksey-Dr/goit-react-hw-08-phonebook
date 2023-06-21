import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from './container';
import AppBar from './appBar/AppBar';

const Home = lazy(() => import('../pages/home/'));
const Register = lazy(() => import('../pages/register/'));
const Login = lazy(() => import('../pages/login/'));
const Contacts = lazy(() => import('../pages/contacts/'));

export const App = () => {

  return (
    <Container>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home/>} />
          <Route path="register" element={<Register/>} />
          <Route path="login" element={<Login/>} />
          <Route path="contacts" element={<Contacts/>} />
        </Route>
      </Routes>
    </Container>
  );
};
