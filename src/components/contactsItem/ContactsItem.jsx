import { useDispatch } from "react-redux";

import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './ContactsItem.module.css';

import { deleteContact } from '../../redux/operations';

const ContactsItem = ({ id, name, number }) => {

  const despatch = useDispatch();

  return (
    <>
      <li className={clsx(css['contacts-item'])}>
        <span>
          <span className={clsx(css.name)}>{name}:</span> {number}
        </span>
        <button type="button" onClick={() => despatch(deleteContact({id}))}>
          Delete
        </button>
      </li>
    </>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsItem;
