import styled from "styled-components";
import { TextField, DialogContent, Dialog, Button } from "@material-ui/core";

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

export const StyledDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  div {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const StyledDialog = styled(Dialog)`
  font-family: "roboto";
`;

export const StyledButton = styled(Button)`
  color: #00356b;
`;
