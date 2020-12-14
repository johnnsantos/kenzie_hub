import { Typography, Box } from "@material-ui/core";

import {
  StyledCard,
  StyledDelete,
  StyledEdit,
  StyledCardContent,
} from "./styles";
import { useHistory } from "react-router-dom";
import { deleteTechs, requestUser } from "../../requests";
import { useParams } from "react-router-dom";
import { handleUserThunk } from "../../store/modules/infoUser/thunks";

const TechCard = ({ tech, setFilteredUser }) => {
  const history = useHistory();
  const { status, title, id } = tech;

  const params = useParams();

  const deleteTech = async () => {
    await deleteTechs(id);
    const user = await requestUser(params.id);
    handleUserThunk(user);
    setFilteredUser([user]);
  };

  return (
    <StyledCard>
      <StyledCardContent>
        <StyledDelete onClick={deleteTech} />

        <Box m={2}>
          <Typography
            variant="overline"
            color="textPrimary"
            component="p"
            align="left"
            noWrap
          >
            Stack: {title}
          </Typography>
        </Box>

        <Box m={2}>
          <Typography
            variant="overline"
            color="textPrimary"
            component="p"
            align="left"
            noWrap
          >
            Status : {status}
            <StyledEdit onClick={() => history.push("/devs")} />
          </Typography>
        </Box>
      </StyledCardContent>
    </StyledCard>
  );
};

export default TechCard;
