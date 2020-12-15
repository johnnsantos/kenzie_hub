import { TextField, Typography, Button } from "@material-ui/core/";
import styled from "styled-components";

export const NewTypography = styled(Typography)`
  color: #34495e;
`;

export const NewTextField = styled(TextField)`
  width: 70%;
  color: #34495e;
  background-color: #fff;
  label {
    color: #05668d !important;
  }
  div > fieldset {
    border-color: #05668d !important;
  }
`;

export const StyledButton = styled(Button)`
  background-color: #004c99;
  color: white;
  margin: 1rem 0;

  &:hover {
    background-color: #05668d;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:visited {
    color: white;
  }
`;
