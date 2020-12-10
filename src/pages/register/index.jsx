import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import "./register.css";
import { signUpUser } from "requests";
import EmailIcon from "@material-ui/icons/Email";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import WorkOutlinedIcon from "@material-ui/icons/WorkOutlined";
import BookIcon from "@material-ui/icons/Book";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SchoolIcon from "@material-ui/icons/School";

const Register = () => {
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
  };

  return (
    <div className="render">
      <h1>Register</h1>
      <div className="align">
        <form onSubmit={handleSubmit(sendForm)}>
          <div className="inputs">
            <EmailIcon />
            <input
              placeholder="E-mail"
              name="email"
              ref={register}
              type="email"
            ></input>
            <div className="warning">{errors.email?.message}</div>
          </div>
          <br />
          <div className="inputs">
            <LockOutlinedIcon />
            <input
              placeholder="Password"
              name="password"
              ref={register}
              type="password"
            ></input>
          </div>
          <div className="warning">{errors.password?.message}</div>
          <br />
          <div className="inputs">
            <LockOutlinedIcon />
            <input
              placeholder="ConfirmPassword"
              name="password_confirmation"
              ref={register}
              type="password"
            ></input>
          </div>
          <div className="warning">{errors.password_confirmation?.message}</div>
          <br />
          <div className="inputs">
            <AccountCircleIcon />
            <input
              placeholder="Name"
              name="name"
              ref={register}
              type="string"
            ></input>
            <div className="warning">{errors.name?.message}</div>
          </div>
          <br />
          <div className="inputs">
            <BookIcon />
            <input
              placeholder="Bio"
              name="bio"
              ref={register}
              type="string"
            ></input>
            <div className="warning">{errors.bio?.message}</div>
          </div>
          <br />
          <div className="inputs">
            <WorkOutlinedIcon />
            <input
              placeholder="Linkedin url"
              name="contact"
              ref={register}
              type="url"
            ></input>
            <div className="warning">{errors.contact?.message}</div>
          </div>
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
          <button className="send" htmlType="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
