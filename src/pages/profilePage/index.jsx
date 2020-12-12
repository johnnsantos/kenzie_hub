import { Typography } from "@material-ui/core";
import { Create } from "@material-ui/icons";
import { StyledAvatar, StyledContainer } from "./styles";
import "./styles.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import InfoProfile from "../../components/InfoProfile";
import EditProfile from "../../components/EditProfile";

const ProfilePage = (prop) => {
  const params = useParams();
  const { id } = params;
  const users = useSelector((state) => state.Users.devs);
  const [filtereduser, setFilteredUser] = useState([
    {
      avatar_url: "",
      name: "",
      email: "",
      course_module: "",
      bio: "",
      techs: "",
      works: "",
    },
  ]);

  useEffect(() => {
    setFilteredUser(
      users.length !== 0
        ? users?.filter((user) => user.id === id)
        : [
            {
              avatar_url: "",
              name: "",
              email: "",
              course_module: "",
              bio: "",
              techs: "",
              works: "",
            },
          ]
    );
  }, [users, id]);

  const { techs, works } = filtereduser[0];

  const [edit, setEdit] = useState(false);

  return (
    <div className="root">
      <StyledContainer className="profile">
        {edit === false ? (
          <InfoProfile data={filtereduser[0]} setEdit={setEdit} />
        ) : (
          <EditProfile data={filtereduser[0]} setEdit={setEdit} />
        )}
      </StyledContainer>
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
