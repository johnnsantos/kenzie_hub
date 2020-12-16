import { DialogActions, DialogTitle } from "@material-ui/core";
import { useState } from "react";
import {
  NewTextField,
  StyledDialogContent,
  StyledDialog,
  StyledButton,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { changeShowWork } from "../../store/modules/showInsertWorks/actions";
import { handleUserThunk } from "../../store/modules/infoUser/thunks";
import { insertWorks, requestUser } from "../../requests";
import { changeShowLoading } from "../../store/modules/Loading/actions";

const InsertWork = () => {
  const [title, setTitle] = useState();
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const [description, setDescription] = useState();
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const [link, setLink] = useState();
  const handleLink = (e) => {
    setLink(e.target.value);
  };

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(changeShowWork(false));
  };

  const { userLoged } = useSelector((state) => state.User);

  const handleInsertWork = async () => {
    const data = { title: title, description: description, deploy_url: link };

    await insertWorks(data);
    const { id } = userLoged;
    const user = await requestUser(id);
    dispatch(handleUserThunk(user));
    dispatch(changeShowLoading(true));
    dispatch(changeShowWork(false));
  };

  return (
    <StyledDialog open={true} keepMounted onClose={handleClose}>
      <DialogTitle>{"Gostaria de adicionar um Projeto?"}</DialogTitle>
      <StyledDialogContent>
        <NewTextField
          placeholder="Título"
          value={title}
          onChange={handleTitle}
        />
      </StyledDialogContent>
      <StyledDialogContent>
        <NewTextField
          placeholder="Descrição"
          value={description}
          onChange={handleDescription}
        />
      </StyledDialogContent>
      <StyledDialogContent>
        <NewTextField
          placeholder="Deploy Link"
          value={link}
          onChange={handleLink}
        />
      </StyledDialogContent>
      <DialogActions>
        <StyledButton onClick={handleInsertWork}>Salvar</StyledButton>
        <StyledButton onClick={handleClose}>Cancelar</StyledButton>
      </DialogActions>
    </StyledDialog>
  );
};

export default InsertWork;
