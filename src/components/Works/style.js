import styled from "styled-components";
import { Card, CardContent, Button, TextField } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import BookmarkBorder from "@material-ui/icons/BookmarkBorder";

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

export const StyledCardContent = styled(CardContent)`
  padding: 8px;
  padding-bottom: 0;
  :last-child {
    padding-bottom: 0;
  }
`;
export const StyledCard = styled(Card)`
  background-color: #e8f1f2;
  width: 100%;

  @media (max-width: 768px) {
    width: 95vw;
    height: 130px;
  }
  &:hover {
    box-shadow: 1px 1px 2px #34495e;
  }
`;

export const StyledEdit = styled(EditIcon)`
  width: 1rem;

  cursor: pointer;
`;

export const StyledDelete = styled(DeleteIcon)`
  cursor: pointer;
  float: right;
`;

export const StyledBookmark = styled(BookmarkBorder)`
  width: 2rem;
  float: right;
  cursor: pointer;
`;

export const StyledDiv = styled.div`
  p {
    display: flex;
    align-items: center;
  }
  div {
    font-family: roboto;

    font-size: 0.75rem;
  }
`;

export const NewTextField = styled(TextField)`
  width: 70%;
  color: #34495e;
  background-color: transparent;
  label {
    color: #05668d !important;
  }
  div > fieldset {
    border-color: #05668d !important;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
