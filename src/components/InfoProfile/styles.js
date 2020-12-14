import styled from "styled-components";
import { Avatar } from "@material-ui/core";

export const StyledAvatar = styled(Avatar)`
  width: 120px;
  height: 120px;
  margin: 10px;
`;

export const ProfileHeader = styled.div`
  width: 70%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-evenly;

  @media only screen and (max-width: 600px) {
    width: 90%;
    margin: 0 auto;
  }
`;
