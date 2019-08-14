import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import GoogleIcon from '../../../assets/images/google-icon.png';

const StyledButton = withStyles({
  root: {
    backgroundColor: '#283655',
    color: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
    textTransform: 'none',
    borderRadius: 20,
    '&:hover': {
      backgroundColor: 'rgba(69,72,104,0.8)',
    },
  },
})(Button);

const GoogleButton = ({ children, showIcon, ...rest }) => {
  return (
    <StyledButton {...rest}>
      {' '}
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {showIcon && (
          <img src={GoogleIcon} alt="google-icon" width={24} height={24} />
        )}
        <span style={{ margin: 5 }}>{children}</span>
      </div>
    </StyledButton>
  );
};

GoogleButton.propTypes = {
  children: PropTypes.node.isRequired,
  showIcon: PropTypes.bool,
};

GoogleButton.defaultProps = {
  showIcon: true,
};

export default GoogleButton;
