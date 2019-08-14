import React from 'react';
import MuiInput from '@material-ui/core/Input';
// TODO: Uncomment when decided to use props
// import PropTypes from 'prop-types';

const Input = ({ ...props }) => {
  return <MuiInput {...props} />;
};

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
