import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { schemaRegister } from "../../helpers";
import "./style.css";
import { signUpUser } from "../../requests";
import SchoolIcon from "@material-ui/icons/School";
import { Select, MenuItem } from "@material-ui/core";
import { NewTypography, NewTextField, StyledButton, OuterDiv } from "./style";
import "../../img/DevCard/signup.svg";
import { dataRegister } from "../../helpers";
import { useState } from "react";

const Register = () => {
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  const [message, setMessage] = useState();

  const sendForm = (data) => {
    delete data.password_confirmation;
    data = { ...data, course_module: module };
    setMessage(signUpUser(data));
    history.push("/login");
  };

  const [module, setModule] = useState(
    "Primeiro módulo (Introdução ao Frontend)"
  );
  return (
    <div className="logo">
      <div className="render">
        <NewTypography variant="h3">Register</NewTypography>
        <br />
        <div>
          <OuterDiv>
            <form onSubmit={handleSubmit(sendForm)}>
              {dataRegister.map((input, index) => (
                <div key={index} className="inputs">
                  {input.icon}
                  <NewTextField
                    placeholder={input.placeholder}
                    name={input.name}
                    inputRef={register}
                    type={input.type}
                  ></NewTextField>
                </div>
              ))}

              <div className="warning">
                {errors.email?.message ||
                  errors.password?.message ||
                  errors.password_confirmation?.message ||
                  errors.name?.message ||
                  errors.bio?.message ||
                  errors.contact?.message}
              </div>
              <br />
              <div className="inputs">
                <SchoolIcon />{" "}
                <Select
                  name="course_module"
                  id="modules"
                  className="select"
                  value={module}
                  onChange={(e) => {
                    setModule(e.target.value);
                  }}
                >
                  <MenuItem
                    className="select"
                    value="Primeiro módulo (Introdução ao Frontend)"
                    selected
                  >
                    Primeiro módulo (Introdução ao Frontend)
                  </MenuItem>
                  <MenuItem
                    className="select"
                    value="Segundo módulo (Frontend Avançado)"
                  >
                    Segundo módulo (Frontend Avançado)
                  </MenuItem>
                  <MenuItem
                    className="select"
                    value="Terceiro módulo (Introdução ao Backend)"
                  >
                    Terceiro módulo (Introdução ao Backend)
                  </MenuItem>
                  <MenuItem
                    className="select"
                    value="Quarto módulo (Backend Avançado)"
                  >
                    Quarto módulo (Backend Avançado)
                  </MenuItem>
                </Select>
              </div>
              <StyledButton className="send" type="submit">
                Send
              </StyledButton>
            </form>
          </OuterDiv>
        </div>
      </div>
    </div>
  );
};

export default Register;
