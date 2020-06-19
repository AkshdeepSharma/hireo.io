import React from 'react';
import { mount } from 'enzyme';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import TestComponentWrapper from '../../TestComponentWrapper';
import NavigationButton from '../../../Components/Common/NavigationButton';

describe('NavigationButton', () => {
  const createWrapper = props =>
    mount(
      <TestComponentWrapper>
        <NavigationButton key={props.direction} direction={props.direction} />
      </TestComponentWrapper>
    );

  it('should render without crashing', () => {
    const props = { direction: 'left' };
    const wrapper = createWrapper(props);
    expect(wrapper).toBeDefined();
  });

  it('should render a button pointing left', () => {
    const props = { direction: 'left' };
    const wrapper = createWrapper(props);
    expect(wrapper.find(NavigateBeforeIcon)).toBeDefined();
  });

  it('should render a button pointing right', () => {
    const props = { direction: 'right' };
    const wrapper = createWrapper(props);
    expect(wrapper.find(NavigateNextIcon)).toBeDefined();
  });
});
