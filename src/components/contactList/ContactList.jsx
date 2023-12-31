import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import clsx from 'clsx';
import css from './ContactList.module.css';

import ContactsItem from '../contactsItem';
import Loader from '../loader';

import { fetchContacts } from '../../redux/operations';
import { selectContacts, selectItems, selectFilter } from '../../redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectItems);
  const { isLoading, error } = useSelector(selectContacts);

  const normalizedFilter = filter.toLowerCase();
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p><b>Error: </b>{error}</p>}
      <ul className={clsx(css.list)}>
        {filterContacts.map(({ id, name, number }) => {
          return <ContactsItem key={id} id={id} name={name} number={number} />;
        })}
      </ul>
    </div>
  );
};

export default ContactList;
