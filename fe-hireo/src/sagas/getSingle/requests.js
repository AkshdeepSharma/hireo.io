import axios from 'axios';
import { backendBaseUrl } from '../../constants/constants';

export function requestFetchSingleResume(id) {
  return axios.request({
    method: 'get',
    url: `${backendBaseUrl}resume/getSingle/${id}`
  });
}
