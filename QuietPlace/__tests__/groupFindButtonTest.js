import React from 'react';
import { mount } from 'enzyme';

import GroupFind from '../groupFind.js';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
});

describe('GroupFind component testing', () => {
  test('Should find GroupFind buttons on the page', () => {
    props = createTestProps({});
    const wrapper = mount(<GroupFind {...props}/>);
    expect(wrapper.exists()).toBe(true);

    expect(wrapper.find('#createButton').text()).toEqual('Create Group');
    expect(wrapper.find('#joinButton').text()).toEqual('Join Group');
  });
});
