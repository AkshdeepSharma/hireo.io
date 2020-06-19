import { call, put } from 'redux-saga/effects';
import { requestFetchSingleResume } from './requests';
import { updateSingleResume } from '../../redux/ducks/resume';

export function* doFetchSingleResume(action) {
  const { id } = action;
  try {
    const response = yield call(requestFetchSingleResume, id);
    if (response.status === 200) {
      const { data } = response;
      yield put(updateSingleResume(data));
    }
  } catch (error) {
    yield put(updateSingleResume(undefined));
  }
}
