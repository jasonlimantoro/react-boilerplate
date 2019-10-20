import React from 'react';
import PropTypes from 'prop-types';
// Utils
import { valueType } from '../UtilPropTypes';
// Styles
import styles from './styles.scss';

const Counter = ({ counter, onAdd, onMinus }) => {
  return (
    <div className={styles.counter__container}>
      <span className={styles.counter__display}>Counter: {counter}</span>
      <div>
        <button type="button" onClick={onAdd}>
          +
        </button>
        <button type="button" onClick={onMinus}>
          -
        </button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  counter: valueType,
  onAdd: PropTypes.func.isRequired,
  onMinus: PropTypes.func.isRequired,
};

export default Counter;
