import { takeLatest } from 'redux-saga/effects';
import {
  POST_RESUME,
  GET_SINGLE_RESUME_BY_ID,
  GET_CURR_RESUME
} from '../redux/ducks/resume';
import { doStoreResume } from './post/handlers';
import { doFetchSingleResume } from './getSingle/handlers';
import { doFetchNextResume } from './getNext/handlers';

export function* watcherSaga() {
  yield takeLatest(POST_RESUME, doStoreResume);
  yield takeLatest(GET_SINGLE_RESUME_BY_ID, doFetchSingleResume);
  yield takeLatest(GET_CURR_RESUME, doFetchNextResume);
}
