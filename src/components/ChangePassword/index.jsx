import { Container, StyledButton, Warnings, StyledForm } from "./styles";
import { TextField, Snackbar } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaChangePassword } from "../../helpers";
import { useHistory } from "react-router-dom";
import { requestChangePassword } from "../../requests";
import Alert from "@material-ui/lab/Alert";
import { useState } from "react";

const ChangePassword = () => {
  const [open, setOpen] = useState(false);

  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schemaChangePassword),
  });

  const changePassword = async (info) => {
    const data = {
      old_password: info.previousPassword,
      password: info.newPassword,
    };
    await requestChangePassword(data);
    setOpen(true);
    setTimeout(() => {
      window.localStorage.clear();
      history.push("/login");
      document.location.reload();
    }, 2000);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(changePassword)}>
        <Snackbar
          autoHideDuration={6000}
          onClose={() => {
            setOpen(false);
          }}
          open={open}
        >
          <Alert variant="filled" severity="success">
            Senha alterada com sucesso
          </Alert>
        </Snackbar>
        <Container>
          <Warnings>
            {errors.previousPassword?.message ||
              errors.newPassword?.message ||
              errors.newPassword_confirmation?.message}
          </Warnings>
          <TextField
            fullWidth
            inputRef={register}
            label="Senha antiga"
            type="password"
            name="previousPassword"
          />
          <TextField
            fullWidth
            inputRef={register}
            label="Nova senha"
            type="password"
            name="newPassword"
          />
          <TextField
            fullWidth
            inputRef={register}
            label="Confirmar nova senha"
            type="password"
            name="newPassword_confirmation"
          />
          <StyledButton variant="outlined" type="submit">
            Salvar
          </StyledButton>
        </Container>
      </StyledForm>
    </>
  );
};

export default ChangePassword;
