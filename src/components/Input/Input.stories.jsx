import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Formik, Field } from 'formik';
import { action } from '@storybook/addon-actions';
import Input from '.';

storiesOf('Component|Input', module)
  .add('Basic', () => {
    const Component = () => {
      const [value, setValue] = useState('');
      return <Input value={value} onChange={e => setValue(e.target.value)} />;
    };
    return <Component />;
  })
  .add('withFormik', () => {
    return (
      <Formik initialValues={{ username: '' }} onSubmit={action('onSubmit')}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="username">
              {({ field }) => <Input placeholder="Enter username" {...field} />}
            </Field>
          </form>
        )}
      </Formik>
    );
  });
