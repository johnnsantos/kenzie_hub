import { Typography } from "@material-ui/core";
import { StyledContainer } from "./styles";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import InfoProfile from "../../components/InfoProfile";
import EditProfile from "../../components/EditProfile";
import WorkIcon from "@material-ui/icons/Work";
import ComputerIcon from "@material-ui/icons/Computer";
import TechCard from "../../components/TechCard";
import Works from "../../components/Works/works";

const ProfilePage = () => {
  const { userLoged } = useSelector((state) => state.User);

  const { techs, works } = userLoged;

  const [edit, setEdit] = useState(false);

  return (
    <div className="root">
      <StyledContainer className="profile">
        {edit === false ? (
          <InfoProfile data={userLoged} setEdit={setEdit} />
        ) : (
          <EditProfile setEdit={setEdit} />
        )}
      </StyledContainer>
      <div className="section">
        <div className="technologies-title">
          <ComputerIcon />
          <Typography variant="h6">Tecnologias</Typography>
        </div>
        <div className="techScroll">
          {techs !== "" &&
            techs?.map((tech, index) => <TechCard key={index} tech={tech} />)}
        </div>
        <div className="technologies-title">
          <WorkIcon />
          <Typography variant="h6">Trabalhos</Typography>
        </div>
        <div className="techScroll">
          {works !== "" &&
            works?.map((work, index) => <Works key={index} work={work} />)}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
