import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from '../../Components/App';
import Header from '../../Components/Header/Header';
import TestComponentWrapper from '../TestComponentWrapper';

describe('App', () => {
  const createWrapperWithPath = path =>
    mount(
      <TestComponentWrapper>
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>
      </TestComponentWrapper>
    );

  it('should render', () => {
    const wrapper = createWrapperWithPath('/');
    expect(wrapper).toBeDefined();
  });

  it('should have a single header', () => {
    const wrapper = createWrapperWithPath('/');
    expect(wrapper.find(Header)).toHaveLength(1);
  });
});
