import { StyledAvatar, ProfileHeader } from "./styles";
import "./styles.css";
import { Typography, IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";

const InfoProfile = ({ data, setEdit }) => {
  const { userLoged } = useSelector((state) => state.User);
  const params = useParams();
  const { avatar_url, name, email, contact, course_module, bio } =
    userLoged.id === params.id ? userLoged : data;

  return (
    <>
      <ProfileHeader>
        <StyledAvatar src={avatar_url} />
        <Typography variant="h5">
          <span className="emphasis">{name}</span>
        </Typography>
      </ProfileHeader>
      {userLoged.id === params.id && <EditIcon onClick={() => setEdit(true)} />}
      <div className="profile-data">
        <Typography variant="body1">
          <span className="emphasis">Email: </span> {email}
        </Typography>
        <Typography variant="body1">
          <span className="emphasis">Módulo: </span>
          {course_module}
        </Typography>
        <Typography variant="body1">
          <span className="emphasis">Contato: </span> {contact}
        </Typography>
      </div>
      <div className="profile-about">
        <Typography variant="body1">{bio}</Typography>
      </div>
    </>
  );
};

export default InfoProfile;
