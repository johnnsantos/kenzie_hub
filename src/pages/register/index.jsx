import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { schemaRegister } from "../../helpers";
import { signUpUser } from "../../requests";
import SchoolIcon from "@material-ui/icons/School";
import {
  Select,
  MenuItem,
  ListItemIcon,
  InputAdornment,
} from "@material-ui/core";
import {
  NewTypography,
  NewTextField,
  StyledButton,
  OuterContainer,
  Render,
  Container,
  Inputs,
  Warning,
  StyledForm,
  StyledImg,
} from "./style";
import "../../img/DevCard/signup.svg";
import { dataRegister } from "../../helpers";
import { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import { useEffect } from "react";
import SignupIMG from "../../img/signup.svg";

import { motion } from "framer-motion";

const Register = () => {
  const history = useHistory();
  const [message, setMessage] = useState();
  const [answer, setAnswer] = useState(false);
  const [responseTrue, setResponseTrue] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  const sendForm = async (data) => {
    delete data.password_confirmation;
    data = { ...data, course_module: module };
    setMessage(await signUpUser(data));
    setAnswer(true);

    setTimeout(() => {
      history.push("/login");
    }, 3000);
  };

  useEffect(() => {
    messageSet();
  }, [message]);

  const messageSet = () => {
    if (message === "Usuário cadastrado com sucesso") {
      setResponseTrue(true);
    }
  };

  const [module, setModule] = useState(
    "Primeiro módulo (Introdução ao Frontend)"
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <OuterContainer>
        <StyledImg src={SignupIMG} />
        <Render>
          <NewTypography variant="h4">Cadastro</NewTypography>
          <Warning>
            {errors.email?.message ||
              errors.password?.message ||
              errors.password_confirmation?.message ||
              errors.name?.message ||
              errors.bio?.message ||
              errors.contact?.message}
          </Warning>
          <Container>
            <StyledForm onSubmit={handleSubmit(sendForm)}>
              {dataRegister.map((input, index) => (
                <Inputs key={index}>
                  <NewTextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {input.icon}
                        </InputAdornment>
                      ),
                    }}
                    placeholder={input.placeholder}
                    name={input.name}
                    inputRef={register}
                    type={input.type}
                  />
                </Inputs>
              ))}

              <Select
                name="course_module"
                id="modules"
                value={module}
                onChange={(e) => {
                  setModule(e.target.value);
                }}
              >
                <MenuItem
                  value="Primeiro módulo (Introdução ao Frontend)"
                  selected
                >
                  <ListItemIcon>
                    <SchoolIcon />
                  </ListItemIcon>
                  Primeiro módulo (Introdução ao Frontend)
                </MenuItem>
                <MenuItem value="Segundo módulo (Frontend Avançado)">
                  <ListItemIcon>
                    <SchoolIcon />
                  </ListItemIcon>
                  Segundo módulo (Frontend Avançado)
                </MenuItem>
                <MenuItem value="Terceiro módulo (Introdução ao Backend)">
                  <ListItemIcon>
                    <SchoolIcon />
                  </ListItemIcon>
                  Terceiro módulo (Introdução ao Backend)
                </MenuItem>
                <MenuItem value="Quarto módulo (Backend Avançado)">
                  <ListItemIcon>
                    <SchoolIcon />
                  </ListItemIcon>
                  Quarto módulo (Backend Avançado)
                </MenuItem>
              </Select>

              <StyledButton
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disableElevation
              >
                Enviar
              </StyledButton>
            </StyledForm>
          </Container>
          {answer ? (
            <>
              {responseTrue ? (
                <Alert severity="success">{message}</Alert>
              ) : (
                <Alert severity="error">{message}</Alert>
              )}
            </>
          ) : null}
        </Render>
      </OuterContainer>
    </motion.div>
  );
};

export default Register;
