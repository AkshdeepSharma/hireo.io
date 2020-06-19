import React from 'react';
import { Typography } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

const Copyright = () => (
  <Typography variant="body2" align="center">
    Copyright © <FormattedMessage id="company_name" />{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);

export default Copyright;
