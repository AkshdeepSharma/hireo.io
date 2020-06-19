import React from 'react';
import { mount } from 'enzyme';
import TestComponentWrapper from '../../TestComponentWrapper';
import FormattedMessageButton from '../../../Components/Common/FormattedMessageButton';

describe('FormattedMessageButton', () => {
  const createWrapper = props =>
    mount(
      <TestComponentWrapper>
        <FormattedMessageButton id={props.id} />
      </TestComponentWrapper>
    );

  it('should render without crashing', () => {
    const props = { id: 'home_hire_me' };
    const wrapper = createWrapper(props);
    expect(wrapper).toBeDefined();
  });

  it('should have text on the button equal to the text passed in as a prop', () => {
    const props = { id: 'home_hire_me' };
    const buttonString = 'Hire Me';
    const wrapper = createWrapper(props);
    expect(wrapper.text()).toEqual(buttonString);
  });
});
