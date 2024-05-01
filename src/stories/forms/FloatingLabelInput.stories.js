import React from 'react';
import FloatingLabelInput from '../../components/forms/FloatingLabelInput';
import '../../components/forms/FloatingLabelInput.css';

export default {
  title: 'Forms/FloatingLabelInput',
  component: FloatingLabelInput,
  argTypes: {  // Optionally define control types for each prop
    type: { control: 'text' },
    placeholder: { control: 'text' },
    label: { control: 'text' },
  }
};

const Template = (args) => <FloatingLabelInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Email',
  type: 'email',
  placeholder: 'Enter your email'
};

export const Empty = Template.bind({});
Empty.args = {
  label: 'Username',
  type: 'text',
  placeholder: 'Enter your username'
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password'
};
