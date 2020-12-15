import styled from "styled-components";
import { Card, CardMedia, Button } from "@material-ui/core";

export const Container = styled(Card)`
  font-family: Roboto;
  background-color: #e8f1f2;
  transition: 0.15s;

  :hover {
    box-shadow: 0px 4px 7px -3px rgba(115, 115, 115, 1);
  }

  .deleteButton {
    :hover {
      color: #e81717;
    }
  }

  .editButton {
    :hover {
      color: #3127f5;
    }
  }

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
