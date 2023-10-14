import axios from "axios";
import { LocalStorage } from "../utility/localStorage";

const HTTP_UNAUTHORIZED = 401;
const HTTP_OK = 200;


const client = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  client.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      if (error.response.status === HTTP_UNAUTHORIZED) {

        console.log(`Received ${HTTP_UNAUTHORIZED} status code`);
        LocalStorage.remove("BearerToken");
  
        window.location.href = "/LogIn";
      }
      return Promise.reject(error);
    }
  );
  
  client.interceptors.request.use(
    async (config) => {
      const token = LocalStorage.get("BearerToken");
  
      console.log("Token is", token);
  
      if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${token}`;
      }
  
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
  
  
  export const AuthService = {
    async signup(userData) {
      try {
        const token = LocalStorage.get("BearerToken");
        const response = await client.post("login", userData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === HTTP_OK) {
          console.log(
            `Setting local token ${response.data.data.token}`
          );
          LocalStorage.set("BearerToken", response.data.data.token);
          return true;
        }
      } catch (error) {
        console.error("Error while logging in");
        return false;
      }
    },
  };
  