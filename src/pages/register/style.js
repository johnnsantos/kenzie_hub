import { TextField, Typography, Button } from "@material-ui/core";
import styled from "styled-components";

export const OuterContainer = styled.div`
  width: 80%;
  margin: 15vh auto;
  display: flex;
  flex-flow: row nowrap;
`;

export const Render = styled.div`
  background-color: #e8f1f2;
  border-radius: 10px;
  color: #34495e;
  text-align: center;
  width: 40%;
  max-width: 600px;
  min-width: 400px;
  padding: 20px;
  opacity: 95%;
`;

export const NewTypography = styled(Typography)`
  padding: 10px;
  color: #34495e;
  @media (max-width: 360px) {
    background-color: #e8f1f2;
  }
`;

export const Container = styled.div`
  min-width: 200px;
  max-width: 400px;
  border-radius: 10px;
  margin: 0 auto;
`;

export const StyledForm = styled.form`
  svg {
    color: #34495e;
    margin-right: 10px;
  }
`;

export const Inputs = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const Warning = styled.div`
  color: red;
  font-size: 14px;
  opacity: 70%;
  font-family: Roboto;
`;

export const NewTextField = styled(TextField)`
  width: 100%;
  color: #34495e;
  label {
    color: #05668d !important;
  }
  div > fieldset {
    border-color: #05668d !important;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 20px;
  background-color: #34495e;
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

export const StyledImg = styled.img`
  width: 50%;
  height: 50vh;
  @media (max-width: 800px) {
    display: none;
  }
`;
