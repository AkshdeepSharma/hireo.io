import axios from 'axios';
import { backendBaseUrl } from '../../constants/constants';

export function requestStoreResume(payload) {
  return axios.request({
    method: 'post',
    url: `${backendBaseUrl}resume/store`,
    data: {
      payload
    }
  });
}
