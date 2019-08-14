import axios from 'lib/axios';

export default class RecruiterService {
  login = async () => {
    return axios.post('/recruiters/login');
  };
}
