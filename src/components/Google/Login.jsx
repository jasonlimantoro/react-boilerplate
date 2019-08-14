import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';

const Login = ({ onSuccess, onFailure, clientId, children, ...rest }) => {
  return (
    <GoogleLogin
      onSuccess={onSuccess}
      onFailure={onFailure}
      clientId={clientId}
      icon
      {...rest}
      render={({ onClick }) => children({ onClick })}
    />
  );
};

Login.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  clientId: PropTypes.string,
};

Login.defaultProps = {
  clientId: process.env.GOOGLE_CLIENT_ID,
};

export default Login;
