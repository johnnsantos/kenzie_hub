import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();

  const schema = yup.object.shape({
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

    course_module: yup
      .string()
      .matches(
        "Primeiro módulo (Introdução ao Frontend)" ||
          "Segundo módulo (Frontend Avançado)" ||
          "Terceiro módulo (Introdução ao Backend)" ||
          "Quarto módulo (Backend Avançado)"
      ),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const sendForm = () => {};

  return (
    <div>
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
        <span>{errors.password_confirmation.message}</span>
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
        <select id="cars" name="cars">
          <option value="Primeiro módulo (Introdução ao Frontend)">Q1</option>
          <option value="Segundo módulo (Frontend Avançado)">Q2</option>
          <option value="Terceiro módulo (Introdução ao Backend)">Q3</option>
          <option value="Quarto módulo (Backend Avançado)">Q4</option>
        </select>

        <button htmlType="submit">Send</button>
      </form>
    </div>
  );
};
