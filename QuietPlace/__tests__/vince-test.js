import React from 'react';
import {shallow, mount} from 'enzyme';
import UserSignUp from '../userSignUp';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
});

describe('User sign up page', () => {
  let wrapper;

  beforeEach(() => {
    let props: any;
    props = createTestProps({});
    wrapper = mount(<UserSignUp {...props}/>);
  });

  it('should return an error if there is no user input', () => {
    expect(wrapper.state('email')).toBe('');
    expect(wrapper.state('password')).toBe('');
    wrapper.find('#signupButton').simulate('click');
    expect(wrapper.state('errorMessage')).toBe('Error: empty input(s)');
  });

  it('should update the state if email and password are provided', () => {
    wrapper.setState({email: 'blah@blah.com'});
    wrapper.setState({password: 'hasija'});

    expect(wrapper.state('email')).toBe('blah@blah.com');
    expect(wrapper.state('password')).toBe('hasija');
  });
});