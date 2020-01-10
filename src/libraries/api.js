import axios from 'axios';
import queryString from 'query-string';

const url = 'https://tester-api.nearthlab.com/v1/photos';

export const getPhotoList = ({ page, labelTypeIds }) => axios.get(url + '?' +queryString.stringify({ page, labelTypeIds: labelTypeIds }, {arrayFormat: 'bracket'}));
export const getPhoto = (id) => axios.get(url + `/${id}`);