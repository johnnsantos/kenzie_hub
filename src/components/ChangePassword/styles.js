import styled from "styled-components";
import { Button } from "@material-ui/core";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  div {
    margin-bottom: 10px;
  }
`;

export const StyledButton = styled(Button)`
  span {
    color: #00356b;
  }
`;

export const Warnings = styled.div`
  font-family: Roboto;
  font-size: 0.8rem;
  color: red;
`;

export const StyledForm = styled.form`
  width: 70%;
  margin: 0 auto;
`;
