import styled from "styled-components";
import { Avatar, Button } from "@material-ui/core";

export const StyledAvatar = styled(Avatar)`
  width: 120px;
  height: 120px;
  margin: 10px;
  object-fit: cover;
`;

export const ProfileHeader = styled.div`
  width: 90%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  svg {
    position: absolute;
    top: 0;
    right: 0;
    color: gray;

    :hover {
      color: #00356b;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledProfileData = styled.div`
  width: 90%;
  margin: 20px;
  p {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
    padding: 10px;
    margin: 0 auto;
  }
`;

export const StyledButton = styled(Button)`
  margin-left: 10px;
`;

export const BackButton = styled(Button)`
  margin-top: 20px;

  background-color: #004c99;
  color: white;
  &:hover {
    background-color: #05668d;
  }
`;
