import axios from 'axios';
import { backendBaseUrl } from '../../constants/constants';

export function requestFetchNextResume(resumeList, filterList) {
  return axios.request({
    method: 'post',
    url: `${backendBaseUrl}resume/getNext`,
    data: {
      resumeList,
      filterList
    }
  });
}
