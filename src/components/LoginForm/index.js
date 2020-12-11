import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../../requests";
import { handleUserThunk } from "../../store/modules/infoUser/thunks";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../helpers";

import { NewTypography, NewTextField, OuterDiv, StyledButton } from "./styles";

const LoginForm = () => {
  const history = useHistory();
  const [message, setMessage] = useState("");

  const { register, unregister, handleSubmit, setValue, errors } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    register("email", { required: "O email está em branco" });
    register("password", { required: "A senha está em branco" });
    return () => {
      unregister("email");
      unregister("password");
    };
  }, [register, unregister]);

  const dispatch = useDispatch();
  const handleLogin = async (data) => {
    const resLogin = await login(data);
    resLogin && setMessage(resLogin.message);
    resLogin && dispatch(handleUserThunk(resLogin.user));
    history.push("/devs");
  };

  return (
    <OuterDiv>
      <NewTypography variant="h3">Login</NewTypography>
      {message}
      <form onSubmit={handleSubmit(handleLogin)}>
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
          {errors.email && (
            <p style={{ color: "red" }}> {errors.email.message} </p>
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
          Entrar
        </StyledButton>
      </form>
    </OuterDiv>
  );
};

export default LoginForm;
