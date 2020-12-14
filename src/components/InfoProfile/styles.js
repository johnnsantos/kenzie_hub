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
  svg {
    position: absolute;
    top: 22vh;
    left: 45vw;
    color: gray;

    :hover {
      color: #00356b;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const StyledProfileData = styled.div`
  width: 100%;
  display: block;
  padding: 5%;
  p {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
`;
