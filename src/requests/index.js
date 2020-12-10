import axios from "axios";

const token = window.localStorage.getItem("authorizationToken");

const baseURL = "https://kenziehub.me";

export const signUpUser = async (data) => {
  try {
    let res = await axios.post(`${baseURL}/users`, data);
    return res.status === 201 && "Usuário cadastrado com sucesso";
  } catch (error) {
    if (error.message === "contact is required") {
      return "Contato é um campo obrigatório";
    }
    if (error.message === " course_module is required") {
      return "modulo do curso é um campo obrigatório";
    }
    if (error.message === "password: minimum is 6 characters") {
      return "A senha deve ter 6 dígitos";
    }
    if (error.message === "Email already exists") {
      return "Email ja cadastrado";
    }
  }
};

export const getUsersList = async (nextURL) => {
  const URL = nextURL !== "" ? nextURL : `${baseURL}/users`;
  let res = await axios.get(`${URL}`);
  return res;
};

export const login = async (data) => {
  try {
    let res = await axios.post(`${baseURL}/sessions`, data);
    window.localStorage.setItem("authorizationToken", res.data.token);

    return "Login efetuado com sucesso";
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
