import { StyledButton } from "../../pages/register/style";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { Container } from "./style.js";

import { useParams } from "react-router-dom";
import { handleUserThunk } from "../../store/modules/infoUser/thunks";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { deleteWorks, requestUser, editTechs } from "../../requests";

import EditIcon from "@material-ui/icons/Edit";

const Works = ({ work }) => {
  const { description, title, id, deploy_url } = work;
  const idUserLoged = useSelector((state) => state.User.userLoged.id);
  const params = useParams();
  const dispatch = useDispatch();
  const [newDescription, setNewDescription] = useState(description);
  const [editable, setEdit] = useState(false);

  const deleteWork = async () => {
    console.log(id);
    await deleteWorks(id);
    const user = await requestUser(params.id);
    dispatch(handleUserThunk(user));
  };

  const editWorks = () => {
    setEdit(true);
  };

  const handleChanges = async () => {
    const tech = { status: newDescription };
    await editTechs(id, tech);
    const user = await requestUser(params.id);
    dispatch(handleUserThunk(user));
    setEdit(false);
  };

  const isdAdmin = () => {
    return idUserLoged === params.id;
  };

  return (
    <Container>
      <div className="outer">
        <div className="render">
          <div className="card">
            <div className="delete">
              {isdAdmin() && (
                <>
                  <EditIcon onClick={editWorks} />
                  <DeleteOutlineIcon onClick={deleteWork} />
                </>
              )}
            </div>

            <h1>{title}</h1>
            <div className="textarea">{description}</div>

            <StyledButton className="linkbutton">
              <a target="_blank" href={deploy_url}>
                Link Deploy
              </a>
            </StyledButton>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Works;
