import {
  StyledAvatar,
  NewTextField,
  StyledLabel,
  StyledContainer,
  StyledProfileData,
  Container,
} from "./styles";
import {
  BookmarkBorder,
  EmailOutlined,
  WorkOutline,
  BookOutlined,
  SchoolOutlined,
} from "@material-ui/icons/";

import {
  MenuItem,
  Select,
  InputAdornment,
  ListItemIcon,
} from "@material-ui/core";
import { useState } from "react";
import { changeImage, requestEditProfile } from "../../requests";
import { handleUserThunk } from "../../store/modules/infoUser/thunks";
import { useDispatch, useSelector } from "react-redux";
import { changeShowLoading } from "../../store/modules/Loading/actions";
import ChangePassword from "../ChangePassword";
import { StyledButton } from "../ChangePassword/styles";

const EditProfile = ({ setEdit }) => {
  const { userLoged } = useSelector((state) => state.User);
  const { avatar_url, name, email, contact, course_module, bio } = userLoged;

  const [changePassword, setChangePassword] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newContact, setNewContact] = useState(contact);
  const [newAvatar, setNewAvatar] = useState(avatar_url);
  const [newBio, setNewBio] = useState(bio);
  const [module, setModule] = useState(course_module);
  const [newEmail, setEmail] = useState(email);

  const dispatch = useDispatch();
  const handleImage = async (e) => {
    dispatch(changeShowLoading(true));
    const data = new FormData();
    data.append("avatar", e.target.files[0]);
    const user = await changeImage(data);
    dispatch(handleUserThunk(user));
    setNewAvatar(user.avatar_url);
    dispatch(changeShowLoading(false));
  };

  const handleChanges = async () => {
    const data = {
      email: newEmail,
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
        <NewTextField
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlined />
              </InputAdornment>
            ),
          }}
          value={newEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <NewTextField
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <WorkOutline />
              </InputAdornment>
            ),
          }}
          value={newContact}
          onChange={(e) => setNewContact(e.target.value)}
        />

        <Select
          fullWidth
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
            <ListItemIcon>
              <SchoolOutlined />
            </ListItemIcon>
            Primeiro módulo (Introdução ao Frontend)
          </MenuItem>
          <MenuItem
            className="select"
            value="Segundo Módulo (Frontend avançado)"
          >
            <ListItemIcon>
              <SchoolOutlined />
            </ListItemIcon>
            Segundo Módulo (Frontend avançado)
          </MenuItem>
          <MenuItem
            className="select"
            value="Terceiro Módulo (Introdução ao Backend)"
          >
            <ListItemIcon>
              <SchoolOutlined />
            </ListItemIcon>
            Terceiro módulo (Introdução ao Backend)
          </MenuItem>
          <MenuItem className="select" value="Quarto Módulo (Backend Avançado)">
            <ListItemIcon>
              <SchoolOutlined />
            </ListItemIcon>
            Quarto módulo (Backend Avançado)
          </MenuItem>
        </Select>

        <NewTextField
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BookOutlined />
              </InputAdornment>
            ),
          }}
          value={newBio}
          onChange={(e) => setNewBio(e.target.value)}
          multiline
        />
      </StyledProfileData>
      <Container>
        <StyledButton
          variant="outlined"
          onClick={() => setChangePassword(!changePassword)}
        >
          Alterar senha
        </StyledButton>
      </Container>
      {changePassword && <ChangePassword />}
    </>
  );
};

export default EditProfile;
