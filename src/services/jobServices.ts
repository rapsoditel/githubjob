import axios from "axios";

const API_URL = "https://dev6.dansmultipro.com/api/recruitment";

export const getJobs = async (params: Record<string, any> = {}) => {
  const response = await axios.get(`${API_URL}/positions.json`, { params });
  return response.data;
};

export const getJobDetail = async (id: string) => {
  const response = await axios.get(`${API_URL}/positions/${id}`);
  return response.data;
};
