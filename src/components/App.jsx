import { Routes, Route } from 'react-router-dom';
import Container from './container';
import AppBar from './appBar/AppBar';
import Home from '../pages/home';
import Register from './../pages/register';
import Login from './../pages/login';
import Contacts from '../pages/contacts';

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
