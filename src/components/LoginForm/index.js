import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { TextField, Typography, Button, Card } from "@material-ui/core/";

import styled from "styled-components";
import axios from "axios";
const baseURL = "https://kenziehub.me";

const LoginForm = ({ setAuthentication }) => {
  const history = useHistory();
  const {
    register,
    unregister,
    handleSubmit,
    setValue,
    errors,
    setError,
  } = useForm();

  useEffect(() => {
    register("email", { required: "O email está em branco" });
    register("password", { required: "A senha está em branco" });
    return () => {
      unregister("email");
      unregister("passoword");
    };
  }, [register, unregister]);

  const tryLogin = (data) => {
    console.log(data);
    axios
      .post(`${baseURL}/sessions`, { ...data })
      .then((res) => {
        window.localStorage.setItem("authToken", res.token);
        console.log(window.localStorage);
        setAuthentication(true);
        history.push("/");
        return res.status === 200 && console.log("Login efetuado com sucesso");
      })
      .catch((err) =>
        setError("password", {
          message: "usuário não autenticado",
        })
      );
  };

  return (
    <OuterDiv>
      <NewTypography variant="h3">Login</NewTypography>

      <form onSubmit={handleSubmit(tryLogin)}>
        <div>
          <NewTextField
            variant="outlined"
            margin="normal"
            size="medium"
            label="Usuário"
            name="email"
            inputRef={register}
            onChange={(e) => setValue("email", e.target.value)}
          />
          {errors.user && (
            <p style={{ color: "red" }}> {errors.user.message} </p>
          )}
        </div>
        <div>
          <NewTextField
            margin="normal"
            variant="outlined"
            size="medium"
            label="Senha"
            name="password"
            inputRef={register}
            onChange={(e) => setValue("password", e.target.value)}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>
        <StyledButton color="primary" variant="contained" type="submit">
          {" "}
          Entrar
        </StyledButton>
      </form>
    </OuterDiv>
  );
};

export default LoginForm;

export const OuterDiv = styled(Card)`
  width: 70vw;
  background-color: #e8f1f2 !important;
  text-align: center;
  border-radius: 10px;
  margin: 0 auto;
`;

export const NewTypography = styled(Typography)`
  color: #34495e;
`;

export const NewTextField = styled(TextField)`
  color: #34495e;
  background-color: #fff;
  label {
    color: #05668d !important;
  }
  div > fieldset {
    border-color: #05668d !important;
  }
`;

export const StyledButton = styled(Button)`
  background-color: #05668d !important;
  margin: 1.3rem !important;
  &:hover {
    background-color: #05668d;
  }
`;
