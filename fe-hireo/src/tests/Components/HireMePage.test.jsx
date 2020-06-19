import React from 'react';
import { mount } from 'enzyme';
import TestComponentWrapper from '../TestComponentWrapper';
import HireMePage from '../../Components/HireMePage';
import * as messages from '../../messages/en.json';

describe('HireMePage', () => {
  const createWrapper = () =>
    mount(
      <TestComponentWrapper>
        <HireMePage />
      </TestComponentWrapper>
    );

  it('should render without crashing', () => {
    const wrapper = createWrapper();
    expect(wrapper).toBeDefined();
  });

  it('should render an upload button', () => {
    const wrapper = createWrapper();
    const dataTest = '[data-test="upload-button"]';
    expect(wrapper.find(dataTest).text()).toEqual(messages.hire_me_page_upload);
  });

  it('should render a submit button', () => {
    const wrapper = createWrapper();
    const dataTest = '[data-test="submit-button"]';
    expect(wrapper.find(dataTest).text()).toEqual(messages.hire_me_page_submit);
  });
});
