import { Typography } from "@material-ui/core";
import { StyledAvatar } from "./styles";
import "./styles.css";
import { useParams } from "react-router-dom";

const ProfilePage = (user) => {
  const { name, email, module, bio, stacks, works } = user;
  return (
    <div className="root">
      <div className="profile">
        <StyledAvatar />
        <Typography variant="h5">Johnnatan Santos</Typography>
        <div className="profile-data">
          <Typography variant="h6">Email: johndoe@email.com</Typography>
          <Typography variant="h6">
            Módulo: Segundo Módulo (Frontend avançado)
          </Typography>
        </div>
        <div className="profile-about">
          <Typography variant="body1">
            Sobre: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aliquid dolorem officia, a non placeat aperiam est ducimus
            laudantium nemo fugiat quo quis voluptates corrupti sunt natus
            perspiciatis voluptatum vero adipisci?
          </Typography>
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
