import React, { createContext, useContext } from 'react';
import axiosInstance from '../ApiConfig/AxiosInstance';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const fetchData = async (endpoint = '/') => {
    try {
      const response = await axiosInstance.get(endpoint);
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  };

  return (
    <ApiContext.Provider value={{ fetchData }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  return useContext(ApiContext);
};
