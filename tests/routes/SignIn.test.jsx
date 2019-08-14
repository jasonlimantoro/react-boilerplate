import React from 'react';

import { render } from '@testing-library/react';
import SignIn from 'routes/SignIn';

describe('Login', () => {
  it('should display correctly', async () => {
    const ui = render(<SignIn />);
    const { queryByTestId } = ui;
    expect(queryByTestId('login-button')).toBeInTheDocument();
  });
});
