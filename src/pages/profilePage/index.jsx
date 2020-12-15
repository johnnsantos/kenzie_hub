import { Typography } from "@material-ui/core";
import { StyledContainer } from "./styles";
import "./styles.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import InfoProfile from "../../components/InfoProfile";
import WorkIcon from "@material-ui/icons/Work";
import ComputerIcon from "@material-ui/icons/Computer";
import TechCard from "../../components/TechCard";
import Works from "../../components/Works/works";

const ProfilePage = () => {
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

  return (
    <div className="root">
      <StyledContainer className="profile">
        <InfoProfile data={filtereduser[0]} />
      </StyledContainer>
      <div className="section">
        <div className="technologies-title">
          <ComputerIcon />
          <Typography variant="h6">Tecnologias</Typography>
        </div>
        <ul>
          {techs !== "" &&
            techs?.map((tech, index) => (
              <li key={index}>
                <TechCard tech={tech} setFilteredUser={setFilteredUser} />
              </li>
            ))}
        </ul>
        <div className="technologies-title">
          <WorkIcon />
          <Typography variant="h6">Trabalhos</Typography>
        </div>
        <Works profile=" " work={works} link="" />
      </div>
    </div>
  );
};

export default ProfilePage;
