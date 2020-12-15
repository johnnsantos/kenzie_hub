import { Typography, Box } from "@material-ui/core";
import { useState } from "react";
import {
  StyledCard,
  StyledDelete,
  StyledEdit,
  StyledCardContent,
  StyledBookmarkBorder,
  StyledDiv,
} from "./styles";
import { deleteTechs, requestUser, editTechs } from "../../requests";
import { useParams } from "react-router-dom";
import { handleUserThunk } from "../../store/modules/infoUser/thunks";
import { Select, MenuItem } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

const TechCard = ({ tech }) => {
  const { status, title, id } = tech;
  const idUserLoged = useSelector((state) => state.User.id);
  const params = useParams();
  const [newStatus, setNewStatus] = useState(status);
  const [editable, setEdit] = useState(false);

  const dispatch = useDispatch();
  const deleteTech = async () => {
    await deleteTechs(id);
    const user = await requestUser(params.id);
    dispatch(handleUserThunk(user));
  };

  const editTech = () => {
    setEdit(true);
  };

  const handleChanges = async () => {
    const tech = { status: newStatus };
    await editTechs(id, tech);
    const user = await requestUser(params.id);
    dispatch(handleUserThunk(user));
    setEdit(false);
  };
  return (
    <StyledCard>
      <StyledCardContent>
        {idUserLoged === id && <StyledDelete onClick={deleteTech} />}
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
          {editable ? (
            <StyledDiv>
              <Typography
                variant="overline"
                color="textPrimary"
                component="p"
                align="left"
                noWrap
              >
                Status:
                <Select
                  name="course_module"
                  id="modules"
                  className="select"
                  value={newStatus}
                  onChange={(evt) => {
                    setNewStatus(evt.target.value);
                  }}
                >
                  <MenuItem className="select" value="Iniciante" selected>
                    Iniciante
                  </MenuItem>
                  <MenuItem className="select" value="Intermediário">
                    Intermediário
                  </MenuItem>
                  <MenuItem className="select" value="Avançado">
                    Avançado
                  </MenuItem>
                </Select>
                {idUserLoged === id && (
                  <StyledBookmarkBorder onClick={handleChanges} />
                )}
              </Typography>
            </StyledDiv>
          ) : (
            <StyledDiv>
              <Typography
                variant="overline"
                color="textPrimary"
                component="p"
                align="left"
                noWrap
              >
                Status : {newStatus}
                {idUserLoged === id && <StyledEdit onClick={editTech} />}
              </Typography>
            </StyledDiv>
          )}
        </Box>
      </StyledCardContent>
    </StyledCard>
  );
};

export default TechCard;
