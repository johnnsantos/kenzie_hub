import {
  StyledAvatar,
  NewTextField,
  StyledLabel,
  StyledContainer,
  StyledEmailIcon,
  StyledBookIcon,
  StyledWorkOutlinedIcon,
} from "./styles";
import { BookmarkBorder } from "@material-ui/icons/";
import { useEffect, useState } from "react";
import { changeImage, requestEditProfile } from "../../requests";
import { handleUserThunk } from "../../store/modules/infoUser/thunks";
import { useDispatch, useSelector } from "react-redux";

const EditProfile = ({ setEdit }) => {
  const { userLoged } = useSelector((state) => state.User);
  const { avatar_url, name, email, contact, course_module, bio } = userLoged;

  const [newName, setNewName] = useState();
  const [newContact, setNewContact] = useState();
  const [newAvatar, setNewAvatar] = useState();

  useEffect(() => {
    setNewName(name);
    setNewContact(contact);
    setNewAvatar(avatar_url);
  }, [userLoged]);

  const dispatch = useDispatch();
  const handleImage = async (e) => {
    const data = new FormData();
    data.append("avatar", e.target.files[0]);
    const user = await changeImage(data);
    dispatch(handleUserThunk(user));
    setNewAvatar(user.avatar_url);
  };

  const handleChanges = async () => {
    const data = { name: newName, contact: newContact };
    const user = await requestEditProfile(data);
    dispatch(handleUserThunk(user));
    setEdit(false);
  };
  return (
    <>
      <StyledContainer>
        <BookmarkBorder onClick={handleChanges} />
        <StyledAvatar src={newAvatar} />
        <NewTextField
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <StyledLabel for="changeImage">
          <input id="changeImage" type="file" onChange={handleImage} />
          Trocar imagem
        </StyledLabel>
      </StyledContainer>
      <div className="profile-data">
        <div>
          <StyledEmailIcon />
          <NewTextField noChange value={email} />
        </div>
        <div>
          <StyledBookIcon />
          <NewTextField noChange value={course_module} />
        </div>
        <div>
          <StyledWorkOutlinedIcon />
          <NewTextField
            value={newContact}
            onChange={(e) => setNewContact(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default EditProfile;
