import React from 'react';
import { storiesOf } from '@storybook/react';
import GoogleButton from '.';

storiesOf('Component|GoogleButton', module).add('with text', () => (
  <GoogleButton>Login With Google</GoogleButton>
));
