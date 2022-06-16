import axios from "axios";

import { logout } from "./utils";

const apiClient = axios.create({
  baseURL: "http://localhost:5002",
  timeout: 1000,
});

apiClient.interceptors.request.use(
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
    return await apiClient.post(`/api/v1/auth/register`, data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const login = async (data) => {
  try {
    return await apiClient.post(`/api/v1/auth/login`, data);
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
