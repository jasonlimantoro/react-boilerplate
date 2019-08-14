import React from 'react';
import Typography from '@material-ui/core/Typography';

const Header = ({ ...props }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#283655',
        color: 'white',
        padding: 10,
        minHeight: 45,
      }}
      {...props}
    >
      <Typography variant="h6">PINTU Resume</Typography>
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
