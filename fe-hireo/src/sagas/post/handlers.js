import { call, put } from 'redux-saga/effects';
import { requestStoreResume } from './requests';
import { history } from '../../constants/history';
import { showSnackBar } from '../../redux/ducks/snackbar';

export function* doStoreResume(action) {
  const { resumeUrl } = action;
  const { skills, positions } = action;
  const filters = {};
  [...skills, ...positions].forEach(filter => {
    filters[filter] = true;
  });
  const timestamp = new Date().getTime();
  const payload = {
    resumeUrl,
    filters,
    timestamp
  };
  try {
    const response = yield call(requestStoreResume, payload);
    if (response.status === 200) {
      const { data } = response;
      yield put(showSnackBar('Success!', 'success'));
      history.push(`/${data}`);
    }
  } catch (error) {
    yield put(showSnackBar('Invalid submission data', 'error'));
  }
}
