import axios from 'axios';

const ENDPOINT = 'http://localhost:4000/graphql';

export const request = async (method, query) => {
  try {
    let response;
    if (method === 'GET') {
      response = await axios.get(ENDPOINT, {
        params: { query },
      });
    } else if (method === 'POST') {
      response = await axios.post(ENDPOINT, { query: query });
    } else {
      throw new Error('Invalid method. Only GET and POST are supported.');
    }

    console.log(`${method} Response:`, response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

