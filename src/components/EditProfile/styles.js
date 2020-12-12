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

export const StyledLabel = styled.label`
  cursor: pointer;
  margin-left: 10px;
  color: #00356b;
  text-transform: uppercase;
  border-bottom: 1px solid transparent;
  height: 40px;
  width: 120px;
  font-size: 15px;
  text-align: center;
  font-family: "Open Sans", sans-serif;

  :hover {
    border-bottom: 1px solid #00356b;
  }
  input {
    display: none;
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
