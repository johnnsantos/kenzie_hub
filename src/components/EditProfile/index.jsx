import {
  StyledAvatar,
  NewTextField,
  StyledLabel,
  StyledContainer,
  StyledProfileData,
} from "./styles";
import {
  BookmarkBorder,
  EmailOutlined,
  WorkOutline,
  BookOutlined,
  SchoolOutlined,
} from "@material-ui/icons/";
import { MenuItem, Select } from "@material-ui/core";
import { useEffect, useState } from "react";
import { changeImage, requestEditProfile } from "../../requests";
import { handleUserThunk } from "../../store/modules/infoUser/thunks";
import { useDispatch, useSelector } from "react-redux";

const EditProfile = ({ setEdit }) => {
  const { userLoged } = useSelector((state) => state.User);
  const { avatar_url, name, email, contact, course_module, bio } = userLoged;

  const [newName, setNewName] = useState(name);
  const [newContact, setNewContact] = useState(contact);
  const [newAvatar, setNewAvatar] = useState(avatar_url);
  const [newBio, setNewBio] = useState(bio);
  const [module, setModule] = useState(course_module);
  console.log(module);

  // useEffect(() => {
  //   setNewName(name);
  //   setNewContact(contact);
  //   setNewAvatar(avatar_url);
  //   setNewBio(bio);
  //   setModule(course_module);
  // }, [userLoged]);

  const dispatch = useDispatch();
  const handleImage = async (e) => {
    const data = new FormData();
    data.append("avatar", e.target.files[0]);
    const user = await changeImage(data);
    dispatch(handleUserThunk(user));
    setNewAvatar(user.avatar_url);
  };

  const handleChanges = async () => {
    const data = {
      name: newName,
      contact: newContact,
      bio: newBio,
      course_module: module,
    };
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
      <StyledProfileData>
        <div>
          <EmailOutlined />
          <NewTextField noChange value={email} />
        </div>
        <div>
          <WorkOutline />
          <NewTextField
            value={newContact}
            onChange={(e) => setNewContact(e.target.value)}
          />
          <div>
            <SchoolOutlined />
            <Select
              name="course_module"
              value={module}
              onChange={(e) => {
                setModule(e.target.value);
              }}
            >
              <MenuItem
                className="select"
                value="Primeiro Módulo (Introdução ao Frontend)"
              >
                Primeiro módulo (Introdução ao Frontend)
              </MenuItem>
              <MenuItem
                className="select"
                value="Segundo Módulo (Frontend avançado)"
              >
                Segundo módulo (Frontend Avançado)
              </MenuItem>
              <MenuItem
                className="select"
                value="Terceiro Módulo (Introdução ao Backend)"
              >
                Terceiro módulo (Introdução ao Backend)
              </MenuItem>
              <MenuItem
                className="select"
                value="Quarto Módulo (Backend Avançado)"
              >
                Quarto módulo (Backend Avançado)
              </MenuItem>
            </Select>
          </div>
        </div>
        <BookOutlined />
        <NewTextField
          value={newBio}
          onChange={(e) => setNewBio(e.target.value)}
          multiline
          variant="outlined"
        />
      </StyledProfileData>
    </>
  );
};

export default EditProfile;
