import { Container } from "./style";
import KenzieLogo from "../../img/kenzieLogo.png";

import { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AddIcon from "@material-ui/icons/Add";
import HomeIcon from "@material-ui/icons/Home";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";

const useStyles = makeStyles({
  list: {
    width: 200,
  },
  fullList: {
    width: "auto",
  },
});

const Header = () => {
  const history = useHistory();

  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
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
        {["Sobre", "Entrar", "Criar Conta"].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() =>
              index === 0
                ? history.push("/sobre")
                : index === 1
                ? history.push("login")
                : history.push("register")
            }
          >
            <ListItemIcon>
              {index === 0 ? (
                <LiveHelpIcon />
              ) : index === 1 ? (
                <ArrowForwardIosIcon />
              ) : (
                <AddIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Container>
      <div onClick={() => history.push("/")} className="headerLogo">
        <img height="50px" src={KenzieLogo} alt="Kenzie Academy Logo" />
        <h1>Kenzie Hub</h1>
      </div>
      <div className="headerList">
        <ul>
          <li onClick={() => history.push("/sobre")}>Sobre</li>

          <li onClick={() => history.push("/login")}>Entrar</li>

          <li onClick={() => history.push("/register")}>Criar Conta</li>
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

export default Header;
