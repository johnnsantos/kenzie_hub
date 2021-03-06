import { Container } from "./style";
import KenzieLogo from "../../img/kenzieLogo.png";

import { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { FloatingMenu } from "../floatingCards";
import { useSelector, useDispatch } from "react-redux";
import { changeShow } from "../../store/modules/showInsertTechs/actions";
import { changeShowWork } from "../../store/modules/showInsertWorks/actions";
import { handleUserThunk } from "../../store/modules/infoUser/thunks";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import AssessmentIcon from "@material-ui/icons/Assessment";
import AddBoxIcon from "@material-ui/icons/AddBox";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import HomeIcon from "@material-ui/icons/Home";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import EditIcon from "@material-ui/icons/Edit";
import ViewListIcon from "@material-ui/icons/ViewList";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import LanguageIcon from "@material-ui/icons/Language";

const useStyles = makeStyles({
  list: {
    width: 200,
  },
  fullList: {
    width: "auto",
  },
});

const HeaderAuthenticated = () => {
  const history = useHistory();
  const classes = useStyles();

  const { userLoged } = useSelector((state) => state.User);

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const logout = () => {
    window.localStorage.clear();
    dispatch(handleUserThunk([]));
    history.push("/");
    document.location.reload();
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const dispatch = useDispatch();
  const handleAddTech = () => {
    dispatch(changeShow(true));
  };

  const handleAddWork = () => {
    dispatch(changeShowWork(true));
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home"].map((text, index) => (
          <ListItem button key={text} onClick={() => history.push("/")}>
            <ListItemIcon>{index === 0 && <HomeIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Adicionar Projeto", "Adicionar Tecnologia"].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={index === 0 ? handleAddWork : handleAddTech}
          >
            <ListItemIcon>
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Sobre", "Explorar", "Gráfico", "Perfil"].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() =>
              index === 0
                ? history.push("/sobre")
                : index === 1
                ? history.push("/devs")
                : index === 2
                ? history.push("/graph")
                : history.push(`/edit/${userLoged.id}`)
            }
          >
            <ListItemIcon>
              {index === 0 ? (
                <LiveHelpIcon />
              ) : index === 1 ? (
                <AssignmentIcon />
              ) : index === 2 ? (
                <AssessmentIcon />
              ) : (
                <AccountBoxIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Logout"].map((text, index) => (
          <ListItem button key={text} onClick={logout}>
            <ListItemIcon>{index === 0 && <ExitToAppIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Container>
      <div onClick={() => history.push("/")} className="headerLogo">
        <img
          className="kenzieLogoHeader"
          height="50px"
          src={KenzieLogo}
          alt="Kenzie Academy Logo"
        />
        <h1>Kenzie Hub</h1>
      </div>
      <div className="headerList">
        <ul>
          <li onClick={() => history.push("/sobre")}>Sobre</li>

          <li onClick={() => history.push("/devs")}>Explorar</li>

          <li onClick={() => history.push("/graph")}>
            Gráficos
            <AssessmentIcon />
          </li>

          <FloatingMenu
            icon1={<ViewListIcon />}
            icon2={<LanguageIcon />}
            option1={"Adicionar Projeto"}
            option2={"Adicionar Tecnologia"}
            mainIcon={<AddToPhotosIcon />}
            action1={handleAddWork}
            action2={handleAddTech}
          />
          <FloatingMenu
            icon1={<EditIcon />}
            icon2={<ExitToAppIcon />}
            option1={"Editar Perfil"}
            option2={"Sair"}
            mainIcon={
              userLoged.name ? userLoged.name.split(" ")[0] : "Loading..."
            }
            image={
              userLoged.avatar_url
                ? userLoged.avatar_url
                : "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg"
            }
            action1={`/edit/${userLoged.id}`}
            action2={logout}
          />
        </ul>
      </div>

      <div className="headerDropDown">
        {["right"].map((anchor) => (
          <Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <ArrowDropDownIcon />
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </Fragment>
        ))}
      </div>
    </Container>
  );
};

export default HeaderAuthenticated;
