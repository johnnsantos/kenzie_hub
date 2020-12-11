import * as yup from "yup";
import EmailIcon from "@material-ui/icons/Email";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import WorkOutlinedIcon from "@material-ui/icons/WorkOutlined";
import BookIcon from "@material-ui/icons/Book";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export const schema = yup.object().shape({
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
