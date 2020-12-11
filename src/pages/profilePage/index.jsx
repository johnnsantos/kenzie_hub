import { Typography } from "@material-ui/core";
import { StyledAvatar } from "./styles";
import "./styles.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfilePage = (user) => {
  const params = useParams();
  const { id } = params;
  const users = useSelector((state) => state.Users);
  const filtereduser = users.devs.filter((user) => user.id === id);
  const {
    avatar_url,
    name,
    email,
    course_module,
    bio,
    techs,
    works,
  } = filtereduser[0];
  return (
    <div className="root">
      <div className="profile">
        <StyledAvatar src={avatar_url} />
        <Typography variant="h5">{name}</Typography>
        <div className="profile-data">
          <Typography variant="h6">Email: {email}</Typography>
          <Typography variant="h6">{course_module}</Typography>
        </div>
        <div className="profile-about">
          <Typography variant="body1">{bio}</Typography>
        </div>
      </div>
      <div className="section">
        <div className="technologies-title">
          <Typography variant="h6">Tecnologias</Typography>
        </div>
        <ul>
          <li>Test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
        <div className="technologies-title">
          <Typography variant="h6">Trabalhos</Typography>
        </div>
        <ul>
          <li>Test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
