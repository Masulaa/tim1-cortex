import axios from "axios";
import { LocalStorage } from "../utility/localStorage";

const HTTP_UNAUTHORIZED = 401;
const HTTP_OK = 200;


const client = axios.create({
    baseURL: "https://4n2q9d.ictcortex.me/api/",
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
  
        window.location.href = "/";
      }
      return Promise.reject(error);
    }
  );
  
  client.interceptors.request.use(
    async (config) => {
      const token = LocalStorage.get("BearerToken");
  
      // console.log("Token is", token);
  
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
        console.log(response);
        if (response.status === HTTP_OK) {
          // console.log(
          //   `Setting local token ${response.data.success.token}`
          // );
          LocalStorage.set("BearerToken", response.data.success.token);
          return true;
        }
      } catch (error) {
        console.error("Error while logging in");
        return false;
      }
    },
    async logout() {
      try {
        LocalStorage.remove("BearerToken");
  
        window.location.href = "/"; 
  
        return true; // Uspješno izlogovan
      } catch (error) {
        console.error("Error logout");
        return false; 
      }
    },
  };

  export const ArticleService = {
    async GetArticles(articleSearchData) {
      return await client.get("articles", articleSearchData);

    },
    async GetSingleArticle(id) {
      return await client.get(`articles/${id}`);
    },
  };

  export const ProfileService = {
    GetProfile() {
      return client.get("user");
    },
    EditProfile(userNewData) {
      return client.post("user", userNewData)
    }
  };
  

  export const OrderService = {
    PostOrder(orderData) {
      return client.post("order", orderData);
     
    },
    GetOrder() {
      return client.get("order");
     
    },
    IsOrderPossible(){
      return client.get("order-possible")
    }
  }

  export const RatingService = {
    PostRating(ratingData){
      return client.post("ratings", ratingData)
    }
  }


  