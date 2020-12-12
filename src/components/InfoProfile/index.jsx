import { StyledAvatar } from "./styles";
import { Typography } from "@material-ui/core";
import { Create } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const InfoProfile = ({ data, setEdit, User }) => {
  const { avatar_url, name, email, contact, course_module, bio } = data;
  const { userLoged } = useSelector((state) => state.User);
  const params = useParams();

  return (
    <>
      {userLoged.id === params.id && <Create onClick={() => setEdit(true)} />}
      <StyledAvatar src={avatar_url} />
      <Typography variant="h5">{name}</Typography>
      <div className="profile-data">
        <Typography variant="h6">Email: {email}</Typography>
        <Typography variant="h6">{course_module}</Typography>
        <Typography variant="h6">{contact}</Typography>
      </div>
      <div className="profile-about">
        <Typography variant="body1">{bio}</Typography>
      </div>
    </>
  );
};

export default InfoProfile;
