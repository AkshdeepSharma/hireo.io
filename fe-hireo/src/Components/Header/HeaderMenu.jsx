import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { func, object } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { switchTheme } from '../../redux/ducks/settings';

const HeaderMenu = props => {
  const { anchorEl, setAnchorEl } = props;
  const dispatch = useDispatch();

  return (
    <Menu
      keepMounted
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={() => setAnchorEl(null)}
    >
      <MenuItem onClick={() => dispatch(switchTheme())}>
        <FormattedMessage id="header_switch_theme" />
      </MenuItem>
    </Menu>
  );
};

HeaderMenu.propTypes = {
  anchorEl: object,
  setAnchorEl: func
};

export default HeaderMenu;
