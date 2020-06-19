import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import TestComponentWrapper from '../TestComponentWrapper';
import Home from '../../Components/Home';
import FormattedMessageButton from '../../Components/Common/FormattedMessageButton';

describe('Home', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(
      <TestComponentWrapper>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </TestComponentWrapper>
    );
  });

  it('should render without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render two buttons', () => {
    expect(wrapper.find(FormattedMessageButton)).toHaveLength(2);
  });
});
