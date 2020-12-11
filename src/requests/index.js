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

// export const login = async (data) => {
//   try {
//     let res = await axios.post(`${baseURL}/sessions`, data);
//     window.localStorage.setItem("authorizationToken", res.data.token);
//     window.localStorage.setItem("ID", res.data.user.id);

//     return { user: res.data.user, message: "Login efetuado com sucesso" };
//   } catch (error) {
//     console.log(error);

//     return "Email e/ou senha incorretos";
//     if (error.message === "Incorrect email / password combination") {
//       console.log(error.message);
//       return "Email ou senha incorretos.";
//     }
//   }
// };
export const login = async (data) => {
  try {
    let res = await axios.post(`${baseURL}/sessions`, data);
    window.localStorage.setItem("authorizationToken", res.data.token);
    window.localStorage.setItem("ID", res.data.user.id);

    console.log(res.status);
    return (
      res.status === 200 && {
        user: res.data.user,
        message: "Login efetuado com sucesso",
      }
    );
  } catch (error) {
    return { message: "Email e/ou senha incorretos." };
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

export const requestUser = async (id) => {
  let res = await axios.get(`${baseURL}/users/${id}`);
  return res.data;
};
