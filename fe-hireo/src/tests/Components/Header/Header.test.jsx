import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import TestComponentWrapper from '../../TestComponentWrapper';
import Header from '../../../Components/Header/Header';
import * as messages from '../../../messages/en.json';

describe('Header', () => {
  const createWrapper = (hiring = false) => {
    const pathname = hiring ? '/rYz3/hire' : 'rYz3';
    window.history.pushState({}, 'test url', pathname);

    return mount(
      <TestComponentWrapper>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </TestComponentWrapper>
    );
  };

  it('should render without crashing', () => {
    const wrapper = createWrapper();
    expect(wrapper).toBeDefined();
  });

  it('should render a filter button if hire is true', () => {
    const dataTest = '[data-test="filter-button"]';
    const hiring = true;
    const wrapper = createWrapper(hiring);
    expect(wrapper.find(dataTest).text()).toEqual(messages.header_show_filter);
  });

  it('should not render a filter button if hire is false', () => {
    const dataTest = '[data-test="filter-button"]';
    const wrapper = createWrapper();
    expect(wrapper.contains(dataTest)).toBe(false);
  });
});
