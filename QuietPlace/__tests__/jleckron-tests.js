import React from 'react';
import {shallow, mount} from 'enzyme';
import GroupFind from '../groupFind';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
});

describe('Group find', () => {
  let wrapper;

  beforeEach(() => {
    let props: any;
    props = createTestProps({});
    wrapper = mount(<GroupFind {...props}/>);
  });

  it('should return an error if there is no user input on create', () => {
    expect(wrapper.state('groupID')).toBe('');
    wrapper.find('#createButton').simulate('click');
    expect(wrapper.state('errorMessage')).toBe('Error: No Group ID Entered');
  });
  it('should return an error if there is no user input on join', () => {
    expect(wrapper.state('groupID')).toBe('');
    wrapper.find('#joinButton').simulate('click');
    expect(wrapper.state('errorMessage')).toBe('Error: No Group ID Entered');
  });

  it('should update the state if group id is provided', () => {
    wrapper.setState({groupID: 'group'});

    expect(wrapper.state('groupID')).toBe('group');
  });
});
