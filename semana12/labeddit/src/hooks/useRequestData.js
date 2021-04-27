import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/Url";

export const useRequestData = (endpoint, initialState) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${endpoint}` , 
      {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
      .then((response) => setData(response.data))
      .catch((error) => alert(error.response.data.message));
  }, [endpoint]);
  return data;
};