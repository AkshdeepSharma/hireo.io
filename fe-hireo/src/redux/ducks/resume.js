import { history } from '../../constants/history';
import { validateResumeIndex } from '../../utils/utils';

export const GET_CURR_RESUME = 'GET_CURR_RESUME';
export const GET_NEXT = 'GET_NEXT';
export const GET_PREV = 'GET_PREV';
export const UPDATE_SINGLE_RESUME = 'UPDATE_SINGLE_RESUME';
export const POST_RESUME = 'POST_RESUME';
export const ADD_OR_REMOVE_SKILLS = 'ADD_OR_REMOVE_SKILLS';
export const ADD_OR_REMOVE_POSITIONS = 'ADD_OR_REMOVE_POSITIONS';
export const GET_SINGLE_RESUME_BY_ID = 'GET_SINGLE_RESUME_BY_ID';
export const SET_PROGRESS = 'SET_PROGRESS';
export const SET_RESUME_URL = 'SET_RESUME_URL';

const initialState = {
  resumeIndex: -1,
  resumeList: [],
  resumeUrl: '',
  skills: new Set(),
  positions: new Set(),
  currResumeData: {},
  uploadProgress: 0,
  resume: ''
};

export default (state = initialState, action) => {
  const { checkBoxValue, checkboxName } = action;
  switch (action.type) {
    case GET_NEXT:
      const nextIndex = state.resumeIndex + 1;
      const gotoNext = validateResumeIndex(nextIndex, state.resumeList);
      if (gotoNext) {
        history.push(`/${state.resumeList[nextIndex]}`);
      }
      return {
        ...state,
        resumeIndex: gotoNext ? nextIndex : state.resumeIndex
      };
    case GET_PREV:
      const prevIndex = state.resumeIndex - 1;
      const gotoPrev = validateResumeIndex(prevIndex, state.resumeList);
      if (gotoPrev) {
        history.push(`/${state.resumeList[prevIndex]}`);
      }
      return {
        ...state,
        resumeIndex: gotoPrev ? prevIndex : state.resumeIndex
      };
    case ADD_OR_REMOVE_SKILLS:
      const newSkills = state.skills;
      if (!checkBoxValue) {
        newSkills.add(checkboxName);
      } else {
        newSkills.delete(checkboxName);
      }
      return {
        ...state,
        skills: newSkills
      };
    case ADD_OR_REMOVE_POSITIONS:
      const newPositions = state.positions;
      if (!checkBoxValue) {
        newPositions.add(checkboxName);
      } else {
        newPositions.delete(checkboxName);
      }
      return {
        ...state,
        positions: newPositions
      };
    case UPDATE_SINGLE_RESUME:
      const updatedResumeList = state.resumeList;
      const resumeSet = new Set(state.resumeList);
      let updatedResumeIndex = state.resumeIndex;
      const { data } = action;
      if (!resumeSet.has(data.id)) {
        updatedResumeList.push(data.id);
        updatedResumeIndex += 1;
      }
      return {
        ...state,
        resumeList: updatedResumeList,
        resumeIndex: updatedResumeIndex,
        currResumeData: data
      };
    case SET_PROGRESS:
      return {
        ...state,
        progress: action.progress
      };
    case SET_RESUME_URL:
      return {
        ...state,
        resumeUrl: action.url
      };
    default:
      return state;
  }
};

export const getCurrResume = (resumeList, skills, positions) => ({
  type: GET_CURR_RESUME,
  resumeList,
  skills,
  positions
});

export const getNext = () => ({
  type: GET_NEXT
});

export const getPrev = () => ({
  type: GET_PREV
});

export const updateSingleResume = data => ({
  type: UPDATE_SINGLE_RESUME,
  data
});

export const postResume = (resumeUrl, skills, positions) => ({
  type: POST_RESUME,
  resumeUrl,
  skills,
  positions
});

export const addOrRemoveSkills = (checkboxName, checkBoxValue) => ({
  type: ADD_OR_REMOVE_SKILLS,
  checkboxName,
  checkBoxValue
});

export const addOrRemovePositions = (checkboxName, checkBoxValue) => ({
  type: ADD_OR_REMOVE_POSITIONS,
  checkboxName,
  checkBoxValue
});

export const getSingleResumeById = id => ({
  type: GET_SINGLE_RESUME_BY_ID,
  id
});

export const setProgress = progress => ({
  type: SET_PROGRESS,
  progress
});

export const setResumeUrl = url => ({
  type: SET_RESUME_URL,
  resumeUrl: url
});
