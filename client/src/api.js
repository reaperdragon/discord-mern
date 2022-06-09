import axios from "axios";

import { logout } from "./utils";

axios.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("user");

    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const register = async (data) => {
  try {
    return await axios.post(`/api/v1/auth/register`, data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const login = async (data) => {
  try {
    return await axios.post(`/api/v1/auth/login`, data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

const checkResponseCode = (exception) => {
  const responseCode = exception?.response?.status;

  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};
