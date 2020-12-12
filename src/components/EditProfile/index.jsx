import { StyledAvatar, NewTextField } from "./styles";
import { Typography } from "@material-ui/core";
import { BookmarkBorder } from "@material-ui/icons/";
import { useEffect, useState } from "react";
import { changeImage } from "../../requests";

const EditProfile = ({ data, setEdit }) => {
  const { avatar_url, name, email, contact, course_module, bio } = data;

  const [newName, setNewName] = useState();
  const [newContact, setNewContact] = useState();
  const [newAvatar, setNewAvatar] = useState();

  useEffect(() => {
    setNewName(name);
    setNewContact(contact);
    setNewAvatar(avatar_url);
  }, [data]);

  const handleImage = (e) => {
    const data = new FormData();
    data.append("avatar", e.target.files[0]);
    console.log(data);
    changeImage(data);
    setNewAvatar(avatar_url);
  };
  return (
    <>
      <BookmarkBorder onClick={() => setEdit(false)} />
      <StyledAvatar src={newAvatar} />
      <NewTextField
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <input type="file" onChange={handleImage} />
      <div className="profile-data">
        <NewTextField value={email} />
        <NewTextField value={course_module} />
        <NewTextField
          value={newContact}
          onChange={(e) => setNewContact(e.target.value)}
        />
      </div>
      <div className="profile-about">
        <Typography variant="body1">{bio}</Typography>
      </div>
    </>
  );
};

export default EditProfile;
