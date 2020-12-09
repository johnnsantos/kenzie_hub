import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Register = () => {
  //const dispatch = useDispatch();
  const [mudule, setModule] = useState("");

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Must be a valid email!")
      .required("This field is required!"),
    password: yup
      .string()
      .min(6, "Must have at leat 6 characters")
      .matches(
        /^(?=.*?[a-z])(?=.*?[#?!@$ %^&*-]).{1,}$/,
        "At least one special character"
      )
      .required("This field is required!"),

    password_confirmation: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Passwords must match"),
    name: yup
      .string()
      .min(6, "Must have 6 characters!")
      .required("This field is required!"),
    bio: yup.string().required("This field is required!"),

    contact: yup.string().required("This field is required!"),

    course_module: yup.string().required("This field is required!"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const getModule = () => {
    const aux = document.getElementById("modules").value;
    console.log(aux);
    setModule(aux);
  };

  const sendForm = () => {};

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(sendForm)}>
        <input
          placeholder="E-mail"
          name="email"
          ref={register}
          type="email"
        ></input>
        <span>{errors.email?.message}</span>
        <br />
        <input
          placeholder="Password"
          name="password"
          ref={register}
          type="password"
        ></input>
        <span>{errors.password?.message}</span>
        <br />
        <input
          placeholder="ConfirmPassword"
          name="password_confirmation"
          ref={register}
          type="password"
        ></input>
        <span>{errors.password_confirmation?.message}</span>
        <br />
        <input
          placeholder="Name"
          name="name"
          ref={register}
          type="string"
        ></input>
        <span>{errors.name?.message}</span>
        <br />
        <input
          placeholder="Bio"
          name="bio"
          ref={register}
          type="string"
        ></input>
        <span>{errors.bio?.message}</span>
        <br />
        <input
          placeholder="Contact"
          name="contact"
          ref={register}
          type="string"
        ></input>
        <span>{errors.contact?.message}</span>
        <br />
        <select name="course_module" id="modules" onChange={getModule}>
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
        <span>{errors.course_module?.message}</span>
        <br />
        <button htmlType="submit">Send</button>
      </form>
    </div>
  );
};

export default Register;
