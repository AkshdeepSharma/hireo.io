import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';
import { object } from 'prop-types';
import configureMockStore from 'redux-mock-store';
import en from '../messages/en.json';
import { availableThemes } from '../constants/constants';
import testStoreState from './testStoreState';

const overrideTestStoreState = reducerOverride => {
  const combinedReducer = {};
  Object.keys(testStoreState).forEach(reducer => {
    combinedReducer[reducer] =
      reducer in reducerOverride
        ? Object.assign({}, testStoreState[reducer], reducerOverride[reducer])
        : testStoreState[reducer];
  });
  return combinedReducer;
};

const TestComponentWrapper = props => {
  const theme = 'light';
  const mockStore = configureMockStore();
  const { children, reducerOverride = {} } = props;

  const overrideReducersCount = Object.keys(reducerOverride).length;
  const testState =
    overrideReducersCount > 0
      ? overrideTestStoreState(reducerOverride)
      : testStoreState;

  const testStore = mockStore(testState);
  return (
    <Provider store={testStore}>
      <IntlProvider locale="en" messages={en}>
        <ThemeProvider theme={createMuiTheme(availableThemes[theme])}>
          <Router>{children}</Router>
        </ThemeProvider>
      </IntlProvider>
    </Provider>
  );
};

TestComponentWrapper.propTypes = {
  children: object,
  reducerOverride: object
};

export default TestComponentWrapper;
