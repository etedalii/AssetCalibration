//This class should be completed
import { signup, login } from "../api";

let auth = {
  onAuthentication: async (payload) => {
    //signup(payload)
    try {
      const {
        data: { user },
      } = await login(payload);
      return user;
    } catch (error) {
      return null;
    }
  },

  saveToken(user) {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(user));
  },

  saveDataToLocalStorage(data) {
    localStorage.setItem("my_data", JSON.stringify(data));
  },

  getDataToLocalStorage() {
    const dataString = localStorage.getItem("my_data");
    const data = JSON.parse(dataString);
    return data;
  },

  logout() {
    localStorage.removeItem("my_data");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  getToken() {
    const tokenString = localStorage.getItem("token");
    if (tokenString !== undefined && tokenString !== null) {
      const userToken = JSON.parse(tokenString);
      return userToken;
    }
    return "";
  },
};
export default auth;
