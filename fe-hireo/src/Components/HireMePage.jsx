import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import FormattedMessageButton from './Common/FormattedMessageButton';
import CheckBoxGroups from './CheckBoxGroups';
import { postResume, setProgress, setResumeUrl } from '../redux/ducks/resume';
import { resetCheckboxes } from '../redux/ducks/tags';
import {
  hireMePageSkills,
  hireMePageJobType,
  checkBoxMessagesSkills,
  checkBoxMessagesJobType
} from '../constants/constants';

const HireMePage = () => {
  const resumeUrl = useSelector(state => state.resume.resumeUrl);
  const skills = useSelector(state => state.resume.skills);
  const positions = useSelector(state => state.resume.positions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCheckboxes());
  }, []);

  const handleSubmitOnClick = () => {
    dispatch(postResume(resumeUrl, skills, positions));
  };

  const buttonMessages = [
    { messageId: 'hire_me_page_upload', dataTest: 'upload-button' },
    {
      messageId: 'hire_me_page_submit',
      onClick: handleSubmitOnClick,
      dataTest: 'submit-button'
    }
  ];

  const getButtons = (messageId, onClick, dataTest) => (
    <Grid item key={messageId}>
      <FormattedMessageButton
        id={messageId}
        onClick={onClick}
        data-test={dataTest}
      />
    </Grid>
  );

  return (
    <Grid container direction="column" alignItems="center">
      <CheckBoxGroups
        checkBoxTitle={hireMePageSkills}
        checkBoxMessages={checkBoxMessagesSkills}
      />
      <CheckBoxGroups
        checkBoxTitle={hireMePageJobType}
        checkBoxMessages={checkBoxMessagesJobType}
      />
      {buttonMessages.map(buttonMessages =>
        getButtons(
          buttonMessages.messageId,
          buttonMessages.onClick,
          buttonMessages.dataTest
        )
      )}
    </Grid>
  );
};

export default HireMePage;
