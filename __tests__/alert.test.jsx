import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../src/alert';

it('renders an alert message', () => {
  const wrapper = shallow((
    <Alert message="Error!" />
  ));
  expect(wrapper.find('.Alert').text()).toBe('Error!');
});
it('renders a success message', () => {
  const wrapper = shallow((
    <Alert message="Success!" success />
  ));
  expect(wrapper.find('.Alert.success').text()).toBe('Success!');
});
/*it('renders an error message', () => {
  const wrapper = shallow((
    <Alert message="Error!" error />
  ));
  expect(wrapper.find('.Alert.error').text()).toBe('Error!');
});*/
