import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogout } from 'react-google-login';

const Logout = ({ onSuccess, onFailure, clientId, children, ...rest }) => {
  return (
    <GoogleLogout
      onLogoutSuccess={onSuccess}
      onFailure={onFailure}
      clientId={clientId}
      icon
      {...rest}
      render={({ onClick }) => children({ onClick })}
    />
  );
};

Logout.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  clientId: PropTypes.string,
};

Logout.defaultProps = {
  clientId: process.env.GOOGLE_CLIENT_ID,
};

export default Logout;
