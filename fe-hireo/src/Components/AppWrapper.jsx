import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { Router } from 'react-router-dom';
import { history } from '../constants/history';
import en from '../messages/en.json';
import { availableThemes } from '../constants/constants';

import App from './App';

const AppWrapper = () => {
  const theme = useSelector(state => state.settings.theme);

  return (
    <IntlProvider locale="en" messages={en}>
      <ThemeProvider theme={createMuiTheme(availableThemes[theme])}>
        <CssBaseline />
        <Router history={history}>
          <App />
        </Router>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default AppWrapper;
