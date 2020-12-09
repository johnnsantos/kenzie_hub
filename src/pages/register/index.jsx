import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import "./register.css";
import { signUpUser } from "requests";

const Register = () => {
  //const dispatch = useDispatch();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Must be a valid email!")
      .required("This field is required!"),
    password: yup
      .string()
      .min(6, "Must have at leat 6 characters")
      .required("This field is required!"),

    password_confirmation: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Passwords must match"),
    name: yup
      .string()
      .min(6, "Must have 6 characters!")
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
    dispatch(signUpUser(data));
  };

  return (
    <div className="render">
      <h1>Register</h1>
      <div className="align">
        <form onSubmit={handleSubmit(sendForm)}>
          <input
            placeholder="E-mail"
            name="email"
            ref={register}
            type="email"
          ></input>
          <span className="warning">{errors.email?.message}</span>
          <br />
          <input
            placeholder="Password"
            name="password"
            ref={register}
            type="password"
          ></input>
          <span className="warning">{errors.password?.message}</span>
          <br />
          <input
            placeholder="ConfirmPassword"
            name="password_confirmation"
            ref={register}
            type="password"
          ></input>
          <span className="warning">
            {errors.password_confirmation?.message}
          </span>
          <br />
          <input
            placeholder="Name"
            name="name"
            ref={register}
            type="string"
          ></input>
          <span className="warning">{errors.name?.message}</span>
          <br />
          <input
            placeholder="Bio"
            name="bio"
            ref={register}
            type="string"
          ></input>
          <span className="warning">{errors.bio?.message}</span>
          <br />
          <input
            placeholder="Linkedin url"
            name="contact"
            ref={register}
            type="url"
          ></input>
          <span className="warning">{errors.contact?.message}</span>
          <br />
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
          <span className="warning">{errors.course_module?.message}</span>
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
