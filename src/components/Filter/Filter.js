import React from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import filterAction from "../../redux/filter/filterAction";

const Filter = ({ filterContact }) => {
  return (
    <input
      className={styles.input}
      onChange={(event) => {
        return filterContact(event.target.value);
      }}
      placeholder="Find contacts by name"
      name="filter"
      type="text"
    />
  );
};

const mapDispatchToProps = { filterContact: filterAction.filterContacts };
export default connect(null, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filterContact: PropTypes.func.isRequired,
};
