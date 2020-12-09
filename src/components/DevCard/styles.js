import styled from "styled-components";
import { Card, CardMedia, Button } from "@material-ui/core";

export const StyledCard = styled(Card)`
  background-color: #fdfdfd;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 10px #34495e;
  }
`;

export const StyledCardMedia = styled(CardMedia)`
  border-radius: 50%;
  transition: 0.5s all;
  height: 40px;
  margin: 5% auto;
  padding-left: 40%;
  padding-top: 40%;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-radius: 0;
    transition: 0.5s all;
  }
`;

export const StyledButton = styled(Button)`
  background-color: #34495e;

  &:hover {
    background-color: #05668d;
  }
`;
