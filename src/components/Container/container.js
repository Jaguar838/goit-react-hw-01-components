import React from 'react';
import styles from './container.scss';
import PropTypes from "prop-types";

export const Container = ({ children }) => <div className={styles.container}>{children}</div>;

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
