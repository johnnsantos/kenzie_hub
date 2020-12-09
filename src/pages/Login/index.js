import { useState, useEffect } from "react";
import axios from "axios";
import LoginForm from "../../components/LoginForm";
import { useHistory } from "react-router-dom";

const baseURL = "https://kenziehub.me";
const Login = () => {
  const [isAuthenticated, setAuthentication] = useState(undefined);
  const history = useHistory();
  useEffect(() => {
    const authToken = window.localStorage.getItem("authToken");
    if (!authToken) {
      setAuthentication(false);
    }
    axios
      .get(`${baseURL}/sessions`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then(() => {
        setAuthentication(true);
        //mandar para a pagina de usuários
      })
      .catch(() => {
        setAuthentication(false);
      });
  }, [history, setAuthentication]); //ver oque preciso passar como array de dependencia
  if (isAuthenticated === undefined) {
    return <div> Loading ...</div>;
  }
  if (isAuthenticated === false) {
    return <LoginForm setAuthentication={setAuthentication} />;
  }
  //rotas autenticadas
  return <div>autenticadasso</div>;
};

export default Login;
