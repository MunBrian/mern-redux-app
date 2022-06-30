import axios from "axios";

const API_URL = "/api/v1/users/";

//register user
const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);

  //check if there is response
  if (response.data) {
    //store response in local storage
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  //check if there is response
  if (response.data) {
    //store response in local storage
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
