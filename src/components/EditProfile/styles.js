import styled, { css } from "styled-components";
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
  margin: 10px;
  padding-left: 10px;
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
  align-items: center;
  flex-wrap: wrap;
  svg {
    position: absolute;
    top: 22vh;
    left: 45vw;
    color: gray;

    :hover {
      color: #00356b;
      cursor: pointer;
    }
  }
`;

export const StyledProfileData = styled.div`
  width: 100%;
  display: block;
  padding: 5%;

  div {
  }
  svg {
    position: initial;
    margin-top: 10px;
    margin-right: 10px;
  }
`;
