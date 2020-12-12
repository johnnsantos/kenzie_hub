import * as yup from "yup";
import EmailIcon from "@material-ui/icons/Email";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import WorkOutlinedIcon from "@material-ui/icons/WorkOutlined";
import BookIcon from "@material-ui/icons/Book";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export const schemaRegister = yup.object().shape({
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
    .matches(/^[a-z ,.'-]+$/i, "Special characters or numbers ar not allowed."),
  bio: yup.string().min(20).max(100).required("This field is required!"),

  contact: yup
    .string()
    .matches(
      /(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
      "Must be a valid linkedin url!"
    )
    .required("This field is required!"),
});

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email!")
    .required("This field is required!"),
  password: yup
    .string()
    .min(6, "Must have at least 6 characters")
    .required("This field is required!"),
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
    placeholder: "Password",
    name: "password",
    type: "password",
  },
  {
    icon: <LockOutlinedIcon />,
    placeholder: "ConfirmPassword",
    name: "password_confirmation",
    type: "password",
  },
  {
    icon: <AccountCircleIcon />,
    placeholder: "Name",
    name: "name",
    type: "string",
  },
  {
    icon: <BookIcon />,
    placeholder: "Bio",
    name: "bio",
    type: "string",
  },
  {
    icon: <WorkOutlinedIcon />,
    placeholder: "Linkedin url",
    name: "contact",
    type: "url",
  },
];

export const team = [
  {
    name: "Johnnatan Santos",
    linkedin: "https://www.linkedin.com/in/johnnsantos/",
    image:
      "https://assets.gitlab-static.net/uploads/-/system/user/avatar/6027914/avatar.png",
  },
  {
    name: "Matheus Gasparotto",
    linkedin: "https://www.linkedin.com/in/matheusgasparotto/",
    image:
      "https://assets.gitlab-static.net/uploads/-/system/user/avatar/6515935/avatar.png",
  },
  {
    name: "Yuri Baldini",
    linkedin: "https://www.linkedin.com/in/yuri-baldini-67371918b/",
    image: "https://gitlab.com/uploads/-/system/user/avatar/6533699/avatar.png",
  },
  {
    name: "Thiago Jacques",
    linkedin: "https://www.linkedin.com/in/thiago-linhares-jacques/",
    image: "https://gitlab.com/uploads/-/system/user/avatar/6535259/avatar.png",
  },
  {
    name: "Christian Sequeira",
    linkedin: "https://www.linkedin.com/in/christian-smmc/",
    image: "https://gitlab.com/uploads/-/system/user/avatar/6534080/avatar.png",
  },
];
