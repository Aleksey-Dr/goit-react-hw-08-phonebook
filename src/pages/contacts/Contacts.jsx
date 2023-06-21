import Filter from 'components/filter';
import ContactForm from './../../components/contactForm';
import ContactList from '../../components/contactList';

const Contacts = () => {
    return (
        <>
            <ContactForm />
            <Filter />
            <ContactList />
        </>
    );
};

export default Contacts;