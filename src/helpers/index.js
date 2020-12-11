import * as yup from "yup";
import EmailIcon from "@material-ui/icons/Email";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import WorkOutlinedIcon from "@material-ui/icons/WorkOutlined";
import BookIcon from "@material-ui/icons/Book";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Precisa ser um e-mail valido;")
    .required("O campo de e-mail é obrigatório."),
  password: yup
    .string()
    .min(6, "São necessários, pelo menos 6 caracteres para a senha.")
    .required("O campo de senha é obrigatório."),

  password_confirmation: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "A senha deve ser igual!")
    .required("O campo de confirmação de senha é obrigatório."),
  name: yup
    .string()
    .min(6, "Minimo de 6 caracteres para o nome.")
    .matches(
      /^[a-z ,.'-]+$/i,
      "Caracteres especiais e números não são permitidos."
    )
    .required("O campo de Nome é obrigatório."),
  bio: yup
    .string()
    .min(20, "Minimo de vinte caracteres para a Bio.")
    .max(100, "Maximo de 100 caracteres para a Bio.")
    .required("O campo de biografia é obrigatório."),

  contact: yup
    .string()
    .matches(
      /(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
      "A url do linkedin deve ser valida."
    )
    .required("O campo de linkedin é obrigatório."),
});

export const dataRegister = [
  {
    icon: <EmailIcon />,
    placeholder: "E-mail",
    name: "email",
    type: "email",
  },
  {
    icon: <LockOutlinedIcon />,
    placeholder: "Senha",
    name: "password",
    type: "password",
  },
  {
    icon: <LockOutlinedIcon />,
    placeholder: "Confirmação de senha.",
    name: "password_confirmation",
    type: "password",
  },
  {
    icon: <AccountCircleIcon />,
    placeholder: "Nome",
    name: "name",
    type: "string",
  },
  {
    icon: <BookIcon />,
    placeholder: "Biografia",
    name: "bio",
    type: "string",
  },
  {
    icon: <WorkOutlinedIcon />,
    placeholder: "Url Linkedin",
    name: "contact",
    type: "url",
  },
];
