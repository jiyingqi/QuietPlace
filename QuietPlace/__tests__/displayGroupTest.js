import React from 'react';
import { mount, shallow } from 'enzyme';

import DisplayGroup from '../displayGroup.js';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
});

describe('Display group testing', () => {
  test('App mount with enzyme', () => {
    let props: any;
    props = createTestProps({});
    const wrapper = mount(<DisplayGroup {...props}/>);
//    wrapper.find('#leaveButton').simulate('click');
//    expect(wrapper.state('errorMessage')).toBe("");
//    wrapper.find('#loginButton').simulate('click');
//    expect(wrapper.state('errorMessage')).toBe("Error: empty input(s)");
  });
});