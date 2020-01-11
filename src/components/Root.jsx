import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';
import rootReducer from 'modules';
import createStore from 'store/createStore';
import App from 'routes';

const theme = {
  shadows: {
    normal: '0 2px 8px #f0f1f2',
  },
};

const Root = ({ config }) => {
  return (
    <Provider store={config.reduxStore}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  );
};

const reduxStore = createStore(rootReducer);
Root.propTypes = {
  /**
   * Global configurations / providers to be used within the app
   */
  config: PropTypes.shape({
    reduxStore: PropTypes.object,
  }),
};

Root.defaultProps = {
  config: {
    reduxStore,
  },
};

export default Root;
