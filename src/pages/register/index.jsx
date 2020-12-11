import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import "./style.css";
import { signUpUser } from "../../requests";
import { useDispatch } from "react-redux";
import EmailIcon from "@material-ui/icons/Email";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import WorkOutlinedIcon from "@material-ui/icons/WorkOutlined";
import BookIcon from "@material-ui/icons/Book";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SchoolIcon from "@material-ui/icons/School";
import Select from "@material-ui/core/Select";
import { NewTypography, NewTextField, StyledButton, OuterDiv } from "./style";
import "../../img/DevCard/signup.svg";

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
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
    console.log(data);
    dispatch(signUpUser(data));
    history.push("/login");
  };

  return (
    <div className="logo">
      <div className="render">
        <NewTypography variant="h3">Register</NewTypography>
        <br />
        <div>
          <OuterDiv>
            <form onSubmit={handleSubmit(sendForm)}>
              <div className="inputs">
                <EmailIcon />
                <NewTextField
                  placeholder="E-mail"
                  name="email"
                  inputRef={register}
                  type="email"
                ></NewTextField>
              </div>
              <div className="warning">{errors.email?.message}</div>
              <br />
              <div>
                <LockOutlinedIcon />
                <NewTextField
                  placeholder="Password"
                  name="password"
                  inputRef={register}
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
                  inputRef={register}
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
                  inputRef={register}
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
                  inputRef={register}
                  type="string"
                ></NewTextField>
              </div>
              <div className="warning">{errors.bio?.message}</div>
              <br />
              <div className="inputs">
                <WorkOutlinedIcon />
                <NewTextField
                  placeholder="Linkedin url"
                  name="contact"
                  inputRef={register}
                  type="url"
                ></NewTextField>
              </div>
              <div className="warning">{errors.contact?.message}</div>
              <br />
              <div className="inputs">
                <SchoolIcon />{" "}
                <Select
                  name="course_module"
                  id="modules"
                  ref={register}
                  className="select"
                  defaultValue={"Primeiro módulo (Introdução ao Frontend)"}
                >
                  <option
                    className="select"
                    value="Primeiro módulo (Introdução ao Frontend)"
                  >
                    Q1 Frontend Introduction
                  </option>
                  <option
                    className="select"
                    value="Segundo módulo (Frontend Avançado)"
                  >
                    Q2 Frontend Advanced
                  </option>
                  <option
                    className="select"
                    value="Terceiro módulo (Introdução ao Backend)"
                  >
                    Q3 Backend Introduction
                  </option>
                  <option
                    className="select"
                    value="Quarto módulo (Backend Avançado)"
                  >
                    Q4 Backend Advanced
                  </option>
                </Select>
              </div>
              <div className="warning">{errors.course_module?.message}</div>
              <br />

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
