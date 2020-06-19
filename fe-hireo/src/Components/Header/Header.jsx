import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  Button
} from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';
import { object } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import HeaderMenu from './HeaderMenu';
import { toggleBool } from '../../redux/ducks/settings';
import { isHiring } from '../../utils/utils';

const Header = props => {
  const { location, history } = props;
  const showFilter = useSelector(state => state.settings.showFilter);
  const currResumeData = useSelector(state => state.resume.currResumeData);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const filterButtonMessage = showFilter
    ? 'header_hide_filter'
    : 'header_show_filter';

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container alignItems="center" justify="space-between">
          <Grid item xs={4}>
            <Button onClick={() => history.push('/')}>
              <Typography variant="h5">
                <FormattedMessage id="header_title" />
              </Typography>
            </Button>
          </Grid>
          {isHiring(location) && Object.keys(currResumeData).length !== 0 && (
            <Grid container item xs={4} justify="center">
              <Button onClick={() => dispatch(toggleBool('showFilter'))}>
                <FormattedMessage
                  data-test="filter-button"
                  id={filterButtonMessage}
                />
              </Button>
            </Grid>
          )}
          <Grid item xs={4} container justify="flex-end">
            <IconButton onClick={e => setAnchorEl(e.currentTarget)}>
              <MoreVert />
            </IconButton>
            <HeaderMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  history: object,
  location: object
};

export default withRouter(Header);
