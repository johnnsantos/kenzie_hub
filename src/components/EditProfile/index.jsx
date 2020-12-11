import { StyledAvatar, NewTextField } from "./styles";
import { Typography } from "@material-ui/core";
import { BookmarkBorder } from "@material-ui/icons/";
import { useEffect, useState } from "react";

const EditProfile = ({ data, setEdit }) => {
  const { avatar_url, name, email, contact, course_module, bio } = data;

  const [newName, setNewName] = useState();
  const [newContact, setNewContact] = useState();

  useEffect(() => {
    setNewName(name);
    setNewContact(contact);
  }, [data]);

  return (
    <>
      <BookmarkBorder onClick={() => setEdit(false)} />
      <StyledAvatar src={avatar_url} />
      <NewTextField
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
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
