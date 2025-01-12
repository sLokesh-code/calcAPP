import axios from "axios";
const apiKey = process.env.REACT_APP_SERVER;

export const getAllHistory = async () => {
  const res = await axios.get(apiKey);
  return res.data.data;
};

export const getOneHistory = async id => {
  const res = await axios.get(apiKey + `/${id}`);
  return res.data;
};

export const createHistory = async data => {
  await axios.post(apiKey, data);
  return true;
};

export const updateHistory = async (id, data) => {
  const res = await axios.put(apiKey + `/${id}`, data);
  return res.data;
};

export const deleteHistory = async id => {
  await axios.delete(apiKey + `/${id}`);
  return true;
};
