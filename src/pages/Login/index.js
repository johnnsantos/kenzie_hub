import { useState, useEffect } from "react";
import axios from "axios";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  const [isAuthenticated, setAuthentication] = useState(undefined);

  useEffect(() => {
    const authToken = window.localStorage.getItem("authToken");
    if (!authToken) {
      setAuthentication(false);
    }
    axios
      .get("", {
        headers: { Authorization: authToken },
        //logica de gerar um token e coloca-lo no headers
      })
      .then(() => {
        setAuthentication(true);
        //mandar para a pagina de usuários
      })
      .catch(() => {
        setAuthentication(false);
      });
  }, []); //ver oque preciso passar como array de dependencia

  return <LoginForm setAuthentication={setAuthentication} />;
};

export default Login;
