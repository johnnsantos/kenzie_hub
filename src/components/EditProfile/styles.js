import styled, { css } from "styled-components";
import { Avatar, TextField, Button } from "@material-ui/core";

export const StyledAvatar = styled(Avatar)`
  width: 120px;
  height: 120px;
  margin: 10px;
  background-color: #5e7fbe;
`;

export const NewTextField = styled(TextField)`
  color: #34495e;
  background-color: #fff;
  margin: 10px auto;
  label {
    color: #05668d !important;
  }
  div > fieldset {
    border-color: #05668d !important;
  }

  ${({ noChange }) =>
    noChange &&
    css`
      background-color: #e8f1f2;
    `}
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
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  svg {
    position: absolute;
    top: 0;
    right: 0;
    color: gray;

    :hover {
      color: #00356b;
      cursor: pointer;
    }
  }
`;

export const StyledProfileData = styled.div`
  width: 80%;
  margin: 25px auto;

  svg {
    color: black;
  }
`;

export const StyledButton = styled(Button)`
  span {
    color: #00356b;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 8%;
`;
