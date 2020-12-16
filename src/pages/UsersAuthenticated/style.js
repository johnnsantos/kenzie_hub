import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const NewTextField = styled(TextField)`
  margin: 10px;
  width: 50%;
  color: #34495e;
  background-color: #fff;
  label {
    color: #05668d !important;
  }
  div > fieldset {
    border-color: #05668d !important;
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  svg {
    margin: auto 0;
    color: #05668d;
  }
`;
