import React from 'react';
import { mount } from 'enzyme';
import { CircularProgress } from '@material-ui/core';
import TestComponentWrapper from '../TestComponentWrapper';
import HireYouPage from '../../Components/HireYouPage';
import NavigationButton from '../../Components/Common/NavigationButton';
import CheckBoxGroups from '../../Components/CheckBoxGroups';
import NotFound from '../../Components/NotFound';
import { testResumes } from '../../constants/constants';

describe('HireYouPage', () => {
  const createWrapper = (
    props = {},
    showFilter = false,
    resumeList = undefined
  ) => {
    const { id = 'wXz7', hiring = false } = props;
    const reducerOverride = {
      settings: {
        showFilter
      },
      resume: {
        resumeList
      }
    };
    return mount(
      <TestComponentWrapper reducerOverride={reducerOverride}>
        <HireYouPage id={id} hiring={hiring} />
      </TestComponentWrapper>
    );
  };

  it('should render without crashing if hire is true', () => {
    const props = { hiring: true };
    const wrapper = createWrapper(props);
    expect(wrapper).toBeDefined();
  });

  it('should render without crashing if hire is false', () => {
    const wrapper = createWrapper();
    expect(wrapper).toBeDefined();
  });

  it('should render NotFound if resume is invalid', () => {
    const props = { id: 'test', hiring: false };
    const showFilter = false;
    const resumeList = testResumes;
    const wrapper = createWrapper(props, showFilter, resumeList);
    expect(wrapper.find(NotFound)).toBeDefined();
  });

  it('should render 2 navigation buttons if hiring is true', () => {
    const props = { hiring: true };
    const showFilter = false;
    const resumeList = testResumes;
    const wrapper = createWrapper(props, showFilter, resumeList);
    expect(wrapper.find(NavigationButton)).toHaveLength(2);
  });

  it('should not render 2 navigation buttons if hiring is false', () => {
    const props = { hiring: false };
    const showFilter = false;
    const resumeList = testResumes;
    const wrapper = createWrapper(props, showFilter, resumeList);
    expect(wrapper.contains(NavigationButton)).toBe(false);
  });

  it('should render 2 CheckBoxGroups components if showFilter is true', () => {
    const props = { hiring: true };
    const showFilter = true;
    const resumeList = testResumes;
    const wrapper = createWrapper(props, showFilter, resumeList);
    expect(wrapper.contains(CheckBoxGroups)).toBe(true);
  });

  it('should not render 2 CheckBoxGroups components if showFilter is false', () => {
    const props = { hiring: false };
    const showFilter = false;
    const resumeList = testResumes;
    const wrapper = createWrapper(props, showFilter, resumeList);
    expect(wrapper.contains(CheckBoxGroups)).toBe(false);
  });

  it('should render a circurlar progress bar if resumeList is undefined', () => {
    const props = { hiring: true };
    const showFilter = false;
    const resumeList = undefined;
    const wrapper = createWrapper(props, showFilter, resumeList);
    expect(wrapper.find(CircularProgress)).toHaveLength(1);
  });
});
