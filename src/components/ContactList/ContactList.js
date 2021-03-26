import React from "react";
import styles from "./ContactList.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactAction from "../../redux/contacts/contactsAction";

const ContactList = ({ showContacts, handleDelete }) => {
  return (
    <>
      {showContacts && (
        <ul className={styles.list}>
          {showContacts.map((el) => {
            return (
              <li
                onClick={() => {
                  handleDelete(el.id);
                }}
                key={el.id}
              >
                {el.name}
                <span>{el.phone}</span>
                <button className={styles.btn} type="button">
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = (store) => {
  const { contacts, filter } = store;
  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
  return { showContacts: filteredContacts };
};
const mapDispatchToProps = {
  handleDelete: contactAction.deleteContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  showContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};
