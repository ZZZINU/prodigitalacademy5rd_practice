import axios from 'axios';

const BASE_URL = '/api';

export const postSignup = async (postData) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/signup`, postData);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
