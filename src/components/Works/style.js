import styled from "styled-components";
import { Card, CardMedia, Button } from "@material-ui/core";

export const Container = styled(Card)`
  font-family: Roboto;
  background-color: #e8f1f2;

  .delete {
    text-align: right;

    svg {
      margin: 0 1rem;
      cursor: pointer;
    }
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
