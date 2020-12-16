import {
  StyledAvatar,
  ProfileHeader,
  StyledProfileData,
  StyledButton,
  BackButton,
} from "./styles";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import { EmailOutlined, WorkOutline, BookOutlined } from "@material-ui/icons";
import DefaultAvatar from "../../img/DevCard/avatar.webp";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const InfoProfile = ({ data, setEdit }) => {
  const { userLoged } = useSelector((state) => state.User);
  const params = useParams();
  const history = useHistory();
  const { avatar_url, name, email, contact, course_module, bio } =
    userLoged.id === params.id ? userLoged : data;

  return (
    <>
      {params.id !== userLoged.id ? (
        <BackButton
          target="_blank"
          onClick={() => history.push("/devs")}
          variant="outlined"
        >
          <ArrowBackIosIcon /> Voltar
        </BackButton>
      ) : null}
      <ProfileHeader>
        <StyledAvatar src={avatar_url ? avatar_url : DefaultAvatar} />
        <Typography variant="h5">
          <b>{name}</b>
        </Typography>
        {userLoged.id === params.id && (
          <EditIcon onClick={() => setEdit(true)} />
        )}
      </ProfileHeader>
      <StyledProfileData>
        <Typography variant="body1">
          <EmailOutlined />
          <b>Email: </b> {email}
        </Typography>
        <Typography variant="body1">
          <BookOutlined />
          <b>Módulo: </b>
          {course_module}
        </Typography>
        <Typography variant="body1">
          <WorkOutline />
          <b>Contato: </b>
          <StyledButton target="_blank" href={contact} variant="outlined">
            Link
          </StyledButton>
        </Typography>
      </StyledProfileData>
      <div className="profile-about">
        <Typography variant="body1">
          <b>Sobre mim: </b>
          {bio}
        </Typography>
      </div>
    </>
  );
};

export default InfoProfile;
