import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

const NotFound = () => (
  <Grid container justify="center">
    <Typography variant="h1">
      <FormattedMessage id="not_found_title" />
    </Typography>
  </Grid>
);

export default NotFound;
