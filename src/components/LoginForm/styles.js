import { TextField, Typography, Button, Card } from "@material-ui/core/";
import styled from "styled-components";

export const OuterDiv = styled(Card)`
  padding-top: 2%;
  width: 35%;
  height: 40%;
  background-color: #e8f1f2 !important;
  text-align: center;
  border-radius: 10px;
  margin: 0 auto;
  @media (max-width: 650px) {
    width: 70%;
    height: 60%;
  }
`;

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
  margin: 20px;
  background-color: #34495e;
  &:hover {
    background-color: #05668d;
  }
`;
