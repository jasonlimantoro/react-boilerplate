import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Google from '.';

storiesOf('component|GoogleAuth', module)
  .add('Login', () => (
    <Google.Login
      onSuccess={action('handleSuccess')}
      onFailure={action('handleFailure')}
    >
      {/* eslint-disable-next-line no-unused-vars */}
      {({ onClick }) => (
        <button onClick={action('onClick')}>Login with Google</button>
      )}
    </Google.Login>
  ))
  .add('Logout', () => (
    <Google.Logout
      onSuccess={action('handleSuccess')}
      onFailure={action('handleFailure')}
    >
      {/* eslint-disable-next-line no-unused-vars */}
      {({ onClick }) => <button onClick={action('onClick')}>Logout</button>}
    </Google.Logout>
  ));
