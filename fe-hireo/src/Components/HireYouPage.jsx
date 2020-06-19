import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { string } from 'prop-types';
import NavigationButton from './Common/NavigationButton';
import CheckBoxGroups from './CheckBoxGroups';
import NotFound from './NotFound';
import {
  getPrev,
  getNext,
  getSingleResumeById,
  getCurrResume
} from '../redux/ducks/resume';
import {
  hireMePageSkills,
  hireMePageJobType,
  checkBoxMessagesSkills,
  checkBoxMessagesJobType
} from '../constants/constants';

const useStyles = makeStyles(() => ({
  iframeContainer: {
    width: '100%',
    height: '750px'
  }
}));

const HireYouPage = props => {
  const { id } = props;
  const showFilter = useSelector(state => state.settings.showFilter);
  const resumeIndex = useSelector(state => state.resume.resumeIndex);
  const resumeList = useSelector(state => state.resume.resumeList);
  const skills = useSelector(state => state.resume.skills);
  const positions = useSelector(state => state.resume.positions);
  const currResumeData = useSelector(state => state.resume.currResumeData);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleResumeById(id));
  }, [id]);

  const handleNextOnClick = () => {
    if (resumeIndex + 1 === resumeList.length) {
      dispatch(getCurrResume(resumeList, skills, positions));
    } else {
      dispatch(getNext());
    }
  };

  const handlePrevOnClick = () => {
    dispatch(getPrev());
  };

  const getResume = () => (
    <>
      <Grid container item xs={4} alignContent="center" justify="flex-end">
        <Grid item>
          <NavigationButton
            direction="left"
            handleOnClick={handlePrevOnClick}
          />
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <iframe
          src={currResumeData.pdfUrl}
          title="resume"
          className={classes.iframeContainer}
        />
      </Grid>
      <Grid container item xs={4} alignContent="center" justify="flex-start">
        <Grid item>
          <NavigationButton
            direction="right"
            handleOnClick={handleNextOnClick}
          />
        </Grid>
      </Grid>
    </>
  );

  const getFilter = () => (
    <Grid container justify="center">
      <CheckBoxGroups
        checkBoxTitle={hireMePageSkills}
        checkBoxMessages={checkBoxMessagesSkills}
      />
      <CheckBoxGroups
        checkBoxTitle={hireMePageJobType}
        checkBoxMessages={checkBoxMessagesJobType}
      />
    </Grid>
  );

  return (
    <>
      {Object.keys(currResumeData).length !== 0 ? (
        <Grid container justify="center">
          {showFilter && getFilter()}
          {getResume()}
        </Grid>
      ) : (
        <NotFound />
      )}
    </>
  );
};

HireYouPage.propTypes = {
  id: string
};

export default withRouter(HireYouPage);
