import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { boxShadow } from 'styled-system';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';

// Utils
import { valueType } from '../UtilPropTypes';
// Styles
import styles from './styles.module.scss';

const StyledButton = styled(Button, {
  shouldForwardProp,
})(boxShadow);

const Counter = ({ counter, onAdd, onMinus }) => {
  return (
    <div className={styles.counter__container}>
      <span className={styles.counter__display}>Counter: {counter}</span>
      <div>
        <StyledButton boxShadow="normal" onClick={onAdd}>
          +
        </StyledButton>
        <StyledButton onClick={onMinus}>-</StyledButton>
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
