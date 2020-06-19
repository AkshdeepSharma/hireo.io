import React from 'react';
import {
  Checkbox,
  Grid,
  FormControlLabel,
  Typography
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { string, array } from 'prop-types';
import { invertCheckbox } from '../redux/ducks/tags';
import { addOrRemoveSkills, addOrRemovePositions } from '../redux/ducks/resume';
import { checkBoxMessagesSkills } from '../constants/constants';

const CheckBoxGroups = props => {
  const checkboxes = useSelector(state => state.tags.checkboxes);
  const dispatch = useDispatch();
  const { checkBoxTitle, checkBoxMessages } = props;

  const checkBoxDispatchCalls = checkboxName => {
    dispatch(invertCheckbox(checkboxName));
    if (checkBoxMessagesSkills.includes(checkboxName))
      dispatch(addOrRemoveSkills(checkboxName, checkboxes[checkboxName]));
    else dispatch(addOrRemovePositions(checkboxName, checkboxes[checkboxName]));
  };

  const getCheckbox = checkboxName => (
    <Checkbox
      color="primary"
      checked={checkboxes[checkboxName]}
      onChange={() => checkBoxDispatchCalls(checkboxName)}
    />
  );
  const getCheckBoxes = checkboxName => (
    <Grid item key={checkboxName}>
      <FormControlLabel
        value={`${checkboxName}_checkbox_message`}
        control={getCheckbox(checkboxName)}
        label={<FormattedMessage id={`${checkboxName}_checkbox_message`} />}
        labelPlacement="end"
      />
    </Grid>
  );

  return (
    <Grid item>
      <Typography>
        <FormattedMessage id={checkBoxTitle} />
      </Typography>
      <Grid container>
        {checkBoxMessages.map(checkboxName => getCheckBoxes(checkboxName))}
      </Grid>
    </Grid>
  );
};

CheckBoxGroups.propTypes = {
  checkBoxTitle: string,
  checkBoxMessages: array
};

export default CheckBoxGroups;
