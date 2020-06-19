import React from 'react';
import { IconButton } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { string, func, bool } from 'prop-types';

const NavigationButton = props => {
  const {
    direction,
    size = 'large',
    handleOnClick = () => {},
    disabled
  } = props;
  const directionMap = {
    left: <NavigateBeforeIcon size={size} />,
    right: <NavigateNextIcon size={size} />
  };
  return (
    <IconButton onClick={handleOnClick} disabled={disabled}>
      {directionMap[direction]}
    </IconButton>
  );
};

NavigationButton.propTypes = {
  direction: string,
  size: string,
  handleOnClick: func,
  disabled: bool
};

export default NavigationButton;
