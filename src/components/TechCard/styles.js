import styled from "styled-components";
import { Card, CardContent, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import BookmarkBorder from "@material-ui/icons/BookmarkBorder";

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

export const StyledButton = styled(Button)`
  background-color: #05668d !important;
  margin: 1.3rem !important;
  &:hover {
    background-color: #05668d;
  }
`;

export const StyledBookmarkBorder = styled(BookmarkBorder)`
  width: 1rem;

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
