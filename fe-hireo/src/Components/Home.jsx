import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Grid, Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { object } from 'prop-types';
import FormattedMessageButton from './Common/FormattedMessageButton';
import { getCurrResume } from '../redux/ducks/resume';

const Home = props => {
  const { history } = props;
  const dispatch = useDispatch();
  const resumeList = useSelector(state => state.resume.resumeList);
  const positions = useSelector(state => state.resume.positions);
  const skills = useSelector(state => state.resume.skills);

  const handleHireMeOnClick = () => {
    history.push('/hireme');
  };

  const handleHireYouOnClick = () => {
    if (resumeList.length > 0) {
      history.push(`/${resumeList[resumeList.length - 1]}`);
    } else {
      dispatch(getCurrResume(resumeList, positions, skills));
    }
  };

  const buttons = [
    {
      messageId: 'home_hire_me',
      handleOnClick: handleHireMeOnClick
    },
    {
      messageId: 'home_hire_you',
      handleOnClick: handleHireYouOnClick
    }
  ];

  const getButtons = (messageId, handleOnClick) => (
    <Grid item key={messageId}>
      <FormattedMessageButton id={messageId} onClick={handleOnClick} />
    </Grid>
  );

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h1">
          <FormattedMessage id="home_title" />
        </Typography>
      </Grid>
      {buttons.map(button =>
        getButtons(button.messageId, button.handleOnClick)
      )}
    </Grid>
  );
};

Home.propTypes = {
  history: object
};

export default withRouter(Home);
