import React from 'react';
import { Button } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { string, func } from 'prop-types';

const FormattedMessageButton = props => {
  const { id, onClick = () => {}, size = 'large' } = props;

  return (
    <Button size={size} onClick={onClick}>
      <FormattedMessage id={id} />
    </Button>
  );
};

FormattedMessageButton.propTypes = {
  onClick: func,
  id: string,
  size: string
};

export default FormattedMessageButton;
