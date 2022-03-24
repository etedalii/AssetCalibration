//This class should be completed
import { signup, login } from '../api'

let auth = {
  onAuthentication: async (payload) => {
    // signup(payload)
    const { data: { user } } = await login(payload)
    return user
  },


  saveToken(user) {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(user));
  },

  saveDataToLocalStorage(data) {
    localStorage.setItem("my_data", JSON.stringify(data));
  },

  getDataToLocalStorage() {
    const dataString = localStorage.getItem('my_data');
    const data = JSON.parse(dataString);
    return data;
  },

  logout() {
    localStorage.removeItem('my_data');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getToken() {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);

    return userToken;
  },
};
export default auth;
