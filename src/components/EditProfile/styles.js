import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { TextField } from "@material-ui/core/";

export const StyledAvatar = styled(Avatar)`
  width: 120px;
  height: 120px;
  margin: 10px;
  background-color: #5e7fbe;
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
