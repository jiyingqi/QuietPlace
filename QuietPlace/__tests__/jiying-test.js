import React from 'react';
import { mount, shallow } from 'enzyme';

import UserLoginPage from '../userLoginPage.js';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
});

describe('Testing userLoginPage with empty email and password login', () => {
  test('App mount with enzyme', () => {
    let props: any;
    props = createTestProps({});
    const wrapper = mount(<UserLoginPage {...props}/>);
    expect(wrapper.state('errorMessage')).toBe("");
    wrapper.find('#loginButton').simulate('click');
    expect(wrapper.state('errorMessage')).toBe("Error: empty input(s)");
  });
});