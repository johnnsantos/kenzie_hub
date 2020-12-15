import styled from "styled-components";
import { Card, CardMedia, Button } from "@material-ui/core";

export const Container = styled(Card)`
  :hover {
    box-shadow: 1px 1px 10px #34495e;
  }

  .render {
    display: flex;
    flex-direction: inherit;
    margin-left: auto;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  .card {
    width: 100%;
    height: 100%;
    border: solid #34495e 2px;
    text-align: center;
    border-radius: 2rem;
  }

  .outer {
    text-align: center;
    background-color: #e8f1f2;
  }

  .linkbutton {
    margin-top: 3%;
  }

  .textarea {
    width: 95%;
    height: 65%;

    margin-left: 2%;
  }

  .delete {
    margin-left: 90%;
    cursor: pointer;
  }
`;

export const StyledButton = styled(Button)`
  background-color: #34495e;

  &:hover {
    background-color: #05668d;
  }
`;
