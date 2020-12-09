import { useEffect } from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const LoginForm = ({ setAuthentication }) => {
  const {
    register,
    unregister,
    handleSubmit,
    setValue,
    errors,
    setErrors,
  } = useForm();

  useEffect(() => {
    register("user", { required: "O usuário está em branco" });
    register("password", { required: "A senha está em branco" });
    return () => {
      unregister("user");
      unregister("passoword");
    };
  }, [register, unregister]);

  const tryLogin = (data) => {
    //função para pegar a autenticação e
    // axios.post("", {... data})
    // .then((res) => {
    // })
  };

  return (
    <OuterDiv>
      <NewTypography variant="h3">Login</NewTypography>

      {/* <form onSubmit={handleSubmit(tryLogin)}> */}
      <div>
        <NewTextField
          variant="outlined"
          margin="normal"
          size="medium"
          label="Usuário"
          name="user"
          inputRef={register}
          onChange={(e) => setValue("user", e.target.value)}
        />
        {errors.user && <p style={{ color: "red" }}> {errors.user.message} </p>}
      </div>
      <div>
        <NewTextField
          margin="normal"
          variant="outlined"
          size="medium"
          label="Senha"
          name="password"
          inputRef={register}
          onChange={(e) => setValue("user", e.target.value)}
        />
      </div>

      {/* </form> */}
    </OuterDiv>
  );
};

export default LoginForm;

export const OuterDiv = styled.div`
  width: 75vw;
  background-color: #e8f1f2;
  text-align: center;
  border-radius: 10px;
  align-items: center;
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
