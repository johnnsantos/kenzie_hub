import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import "./register.css";
import EmailIcon from "@material-ui/icons/Email";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import WorkOutlinedIcon from "@material-ui/icons/WorkOutlined";
import BookIcon from "@material-ui/icons/Book";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SchoolIcon from "@material-ui/icons/School";
import {
  NewTypography,
  NewTextField,
  StyledButton,
  OuterDiv,
} from "../Login/index";

const Register = () => {
  const history = useHistory();
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Must be a valid email!")
      .required("This field is required!"),
    password: yup
      .string()
      .min(6, "Must have at least 6 characters")
      .required("This field is required!"),

    password_confirmation: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Passwords must match"),
    name: yup
      .string()
      .min(6, "Must have at least 6 characters!")
      .required("This field is required!")
      .matches(
        /^[a-z ,.'-]+$/i,
        "Special characters or numbers ar not allowed."
      ),
    bio: yup.string().min(20).max(100).required("This field is required!"),

    contact: yup
      .string()
      .matches(
        /(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
        "Must be a valid linkedin url!"
      )
      .required("This field is required!"),

    course_module: yup.string().required("This field is required!"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const sendForm = (data) => {
    delete data.password_confirmation;
    history.push("/login");
  };

  return (
    <OuterDiv>
      <div className="render">
        <NewTypography variant="h3">Register</NewTypography>
        <div className="align">
          <form onSubmit={handleSubmit(sendForm)}>
            <div className="inputs">
              <EmailIcon />
              <NewTextField
                placeholder="E-mail"
                name="email"
                ref={register}
                type="email"
              ></NewTextField>
            </div>
            <div className="warning">{errors.email?.message}</div>
            <br />
            <div className="inputs">
              <LockOutlinedIcon />
              <NewTextField
                placeholder="Password"
                name="password"
                ref={register}
                type="password"
              ></NewTextField>
            </div>
            <div className="warning">{errors.password?.message}</div>
            <br />
            <div className="inputs">
              <LockOutlinedIcon />
              <NewTextField
                placeholder="ConfirmPassword"
                name="password_confirmation"
                ref={register}
                type="password"
              ></NewTextField>
            </div>
            <div className="warning">
              {errors.password_confirmation?.message}
            </div>
            <br />
            <div className="inputs">
              <AccountCircleIcon />
              <NewTextField
                placeholder="Name"
                name="name"
                ref={register}
                type="string"
              ></NewTextField>
            </div>
            <div className="warning">{errors.name?.message}</div>
            <br />
            <div className="inputs">
              <BookIcon />
              <NewTextField
                placeholder="Bio"
                name="bio"
                ref={register}
                type="string"
              ></NewTextField>
            </div>
            <div className="warning">{errors.bio?.message}</div>
            <br />
            <div className="inputs">
              <WorkOutlinedIcon />
              <input
                placeholder="Linkedin url"
                name="contact"
                ref={register}
                type="url"
              ></input>
            </div>
            <div className="warning">{errors.contact?.message}</div>
            <br />
            <div className="inputs">
              <SchoolIcon />{" "}
              <select name="course_module" id="modules" ref={register}>
                <option value="Primeiro módulo (Introdução ao Frontend)">
                  Q1 Frontend Introduction
                </option>
                <option value="Segundo módulo (Frontend Avançado)">
                  Q2 Frontend Advanced
                </option>
                <option value="Terceiro módulo (Introdução ao Backend)">
                  Q3 Backend Introduction
                </option>
                <option value="Quarto módulo (Backend Avançado)">
                  Q4 Backend Advanced
                </option>
              </select>
            </div>
            <div className="warning">{errors.course_module?.message}</div>
            <br />
            <br />
            <StyledButton className="send" htmlType="submit">
              Send
            </StyledButton>
          </form>
        </div>
      </div>
    </OuterDiv>
  );
};

export default Register;
