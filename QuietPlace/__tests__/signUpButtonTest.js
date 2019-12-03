import React from 'react';
import { mount } from 'enzyme';

import UserSignUp from '../userSignUp.js';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
});

describe('userSignUp component testing', () => {
  test('Signing up with empty email and password inputs', () => {
    props = createTestProps({});
    const wrapper = mount(<UserSignUp {...props}/>);
    expect(wrapper.exists()).toBe(true);

    expect(wrapper.find('#signupButton').text()).toEqual('Signup');
    expect(wrapper.find('#swapToLoginButton').text()).toEqual('Already have an account? Login');
  });
});