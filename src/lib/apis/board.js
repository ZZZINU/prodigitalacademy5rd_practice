import axios from 'axios';

const BASE_URL = '/api';

export const fetchBoardList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/board`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchBoardDetail = async (boardId) => {
  try {
    const response = await axios.get(`${BASE_URL}/board/${boardId}`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
