import axios from 'axios';

const URL = "https://pixabay.com/api/"

export default async function createHTTPRequest(params) {
    try {
      const response = await axios.get(URL, params);
      return response.data;
    } catch (error) {
      throw error;
    }
  }