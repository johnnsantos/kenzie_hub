import axios from "axios";

const token = 0;

const baseURL = "https://kenziehub.me";

export const signUpUser = (data) => {
  axios.post(`${baseURL}/users`, data).then((res) => console.log(res));
};

export const getUsersList = async (nextURL) => {
  const URL = nextURL !== "" ? nextURL : `${baseURL}/users`;
  let res = await axios.get(`${URL}`);
  return res;
};

export const login = async (data) => {
  try {
    let res = await axios.post(`${baseURL}/sessions`, data);
    window.localStorage.setItem("authorizationToken", res.token);
    return res.status === 201 && "Login efetuado com sucesso";
  } catch (error) {
    if (error.message === "Incorrect email / password combination") {
      return "Email ou senha incorretos.";
    }
  }
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
