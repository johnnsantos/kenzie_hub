import { Container, StyledButton, Warnings, StyledForm } from "./styles";
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaChangePassword } from "../../helpers";
import { useHistory } from "react-router-dom";

const ChangePassword = () => {
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schemaChangePassword),
  });

  const changePassword = async (data) => {
    console.log(data);
    // setTimeout(() => {
    //   history.push("/login");
    // }, 3000);
  };

  return (
    <StyledForm onSubmit={handleSubmit(changePassword)}>
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
  );
};

export default ChangePassword;
