import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Register = () => {
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

    name: yup
      .string()
      .min(6, "Must have 6 characters!")
      .required("This field is required!"),
  });
  return <div></div>;
};
