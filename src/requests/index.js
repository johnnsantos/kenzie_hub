import axios from "axios";

const token = 0;

const baseURL = "https://kenziehub.me";

export const signUpUser = (data) => {
  axios.post(`${baseURL}/users`, data).then((res) => console.log(res));
};

export const getUsersList = async (nextURL) => {
  const URL = nextURL !== "" ? nextURL : `${baseURL}/users`;
  let res = await axios.get(`${URL}`);
  console.log(res);
  return res;
};

export const login = () => {
  axios.post(`${baseURL}/sessions`).then((res) => console.log(res));
};

export const addTechs = (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  axios.post(`${baseURL}/users/techs`, data, config);
};
