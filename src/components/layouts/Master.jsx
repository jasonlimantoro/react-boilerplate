import React from 'react';
import PropTypes from 'prop-types';
import defaultHeader from './Header';

const Master = ({ Header, children }) => {
  return (
    <div>
      <Header />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 45px)',
        }}
      >
        {children}
      </div>
    </div>
  );
};

Master.propTypes = {
  Header: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Master.defaultProps = {
  Header: defaultHeader,
};

export default Master;
