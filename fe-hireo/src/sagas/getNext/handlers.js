import { call, put } from 'redux-saga/effects';
import { requestFetchNextResume } from './requests';
import { history } from '../../constants/history';
import { showSnackBar } from '../../redux/ducks/snackbar';

export function* doFetchNextResume(action) {
  const { resumeList, positions, skills } = action;
  const filters = [...positions, ...skills];
  let filterList;
  try {
    filterList = Object.assign(...filters.map(k => ({ [k]: true })));
  } catch (TypeError) {
    filterList = {};
  }
  try {
    const response = yield call(requestFetchNextResume, resumeList, filterList);
    if (response.status === 200) {
      const { data } = response;
      if (!data) {
        yield put(
          showSnackBar(
            'No more resumes to display with the current filters!',
            'info'
          )
        );
      } else {
        history.push(`/${data}`);
      }
    }
  } catch (error) {
    yield put(showSnackBar('Error retrieving resumes', 'error'));
  }
}
