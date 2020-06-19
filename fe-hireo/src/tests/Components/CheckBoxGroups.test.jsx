import React from 'react';
import { mount } from 'enzyme';
import { FormControlLabel } from '@material-ui/core';
import TestComponentWrapper from '../TestComponentWrapper';
import CheckBoxGroups from '../../Components/CheckBoxGroups';
import * as messages from '../../messages/en.json';

describe('CheckBoxGroups', () => {
  const createWrapper = (props = {}) => {
    const {
      checkBoxTitle = 'hire_me_page_skills',
      checkBoxMessages = []
    } = props;
    return mount(
      <TestComponentWrapper>
        <CheckBoxGroups
          checkBoxTitle={checkBoxTitle}
          checkBoxMessages={checkBoxMessages}
        />
      </TestComponentWrapper>
    );
  };

  it('should render without crashing', () => {
    const wrapper = createWrapper();
    expect(wrapper).toBeDefined();
  });

  it('should have a title equal to the title passed in', () => {
    const props = { checkBoxTitle: 'hire_me_page_jobtype' };
    const wrapper = createWrapper(props);
    expect(wrapper.text()).toEqual(messages.hire_me_page_jobtype);
  });

  it('should render the same number of checkboxes passed in', () => {
    const props = { checkBoxMessages: ['backendDev', 'frontendDev'] };
    const wrapper = createWrapper(props);
    expect(wrapper.find(FormControlLabel)).toHaveLength(
      props.checkBoxMessages.length
    );
  });

  it('should render a checkbox with a name equal to the name passed in', () => {
    const props = { checkBoxMessages: ['backendDev'] };
    const wrapper = createWrapper(props);
    expect(wrapper.find(FormControlLabel).text()).toEqual(
      messages.backendDev_checkbox_message
    );
  });
});
