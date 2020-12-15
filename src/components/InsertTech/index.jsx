import {
  DialogActions,
  DialogTitle,
  Slide,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useState } from "react";
import {
  NewTextField,
  StyledDialogContent,
  StyledDialog,
  StyledButton,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { changeShow } from "../../store/modules/showInsertTechs/actions";
import { handleUserThunk } from "../../store/modules/infoUser/thunks";
import { insertTechs, requestUser } from "../../requests";
import { useHistory } from "react-router-dom";

const InsertTech = () => {
  const [title, setTitle] = useState();
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const [status, setStatus] = useState("Iniciante");
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(changeShow(false));
  };

  const { userLoged } = useSelector((state) => state.User);

  const handleInsertTech = async () => {
    const data = { title: title, status: status };
    await insertTechs(data);
    const { id } = userLoged;
    const user = await requestUser(id);
    dispatch(handleUserThunk(user));
    dispatch(changeShow(false));
  };

  return (
    <StyledDialog open={true} keepMounted onClose={handleClose}>
      <DialogTitle>{"Gostaria de adicionar uma Tecnologia?"}</DialogTitle>
      <StyledDialogContent>
        <NewTextField
          placeholder="Título"
          value={title}
          onChange={handleTitle}
        />
        <Select
          name="course_module"
          id="modules"
          className="select"
          value={status}
          onChange={handleStatus}
        >
          <MenuItem value="Iniciante" selected>
            Iniciante
          </MenuItem>
          <MenuItem value="Intermediário">Intermediário</MenuItem>
          <MenuItem value="Avançado">Avançado</MenuItem>
        </Select>
      </StyledDialogContent>
      <DialogActions>
        <StyledButton onClick={handleInsertTech}>Salvar</StyledButton>
        <StyledButton onClick={handleClose}>Cancelar</StyledButton>
      </DialogActions>
    </StyledDialog>
  );
};

export default InsertTech;
