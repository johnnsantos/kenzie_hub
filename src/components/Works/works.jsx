import { Typography, Box } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  Container,
  StyledButton,
  StyledBookmark,
  NewTextField,
  ContainerInputs,
} from "./style";
import { useParams } from "react-router-dom";
import { handleUserThunk } from "../../store/modules/infoUser/thunks";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { deleteWorks, requestUser, requestEditWork } from "../../requests";

import EditIcon from "@material-ui/icons/Edit";

const Works = ({ work }) => {
  const { description, title, deploy_url, id } = work;
  const [editable, setEdit] = useState(false);
  const idUserLoged = useSelector((state) => state.User.userLoged.id);
  const params = useParams();
  const dispatch = useDispatch();
  console.log(idUserLoged);
  const [newDescription, setNewDescription] = useState(description);
  const [newTitle, setNewTitle] = useState(title);
  const [newUrl, setNewUrl] = useState(deploy_url);

  const deleteWork = async () => {
    await deleteWorks(id);
    const user = await requestUser(params.id);
    dispatch(handleUserThunk(user));
  };

  const editWork = () => {
    setEdit(true);
  };

  const handleChanges = async () => {
    const work = {
      deploy_url: newUrl,
      description: newDescription,
      title: newTitle,
    };
    await requestEditWork(id, work);
    const user = await requestUser(params.id);
    dispatch(await handleUserThunk(user));
    setEdit(false);
  };
  console.log(work);
  const isdAdmin = () => {
    return idUserLoged === params.id;
  };

  return (
    <Container>
      {editable ? (
        <>
          <div>
            <StyledBookmark onClick={handleChanges} />
          </div>
          <ContainerInputs>
            <NewTextField
              variant="standard"
              margin="normal"
              size="medium"
              label="Descrição"
              name="description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
            <NewTextField
              variant="standard"
              margin="normal"
              size="medium"
              label="Título"
              name="tittle"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <NewTextField
              variant="standard"
              margin="normal"
              size="medium"
              label="URL"
              name="deploy_url"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
            />
          </ContainerInputs>
        </>
      ) : (
        <>
          <div className="delete">
            {isdAdmin() && (
              <div>
                <EditIcon className="editButton" onClick={editWork} />
                <DeleteIcon className="deleteButton" onClick={deleteWork} />
              </div>
            )}
          </div>
          <Box m={2}>
            <Typography
              variant="overline"
              color="textPrimary"
              component="h4"
              align="left"
              noWrap
            >
              Trabalho: {newTitle}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="overline"
              color="textPrimary"
              component="h4"
              align="left"
            >
              Descrição: {newDescription}
            </Typography>
          </Box>

          <StyledButton onClick={() => (window.location.href = `${newUrl}`)}>
            Deploy link
          </StyledButton>
        </>
      )}
    </Container>
  );
};

export default Works;
