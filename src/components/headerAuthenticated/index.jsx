import { Container } from "./style";
import KenzieLogo from "../../img/kenzieLogo.png";

import { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import HomeIcon from "@material-ui/icons/Home";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

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

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const logout = () => {
    window.localStorage.setItem("authorizationToken", "");
    history.push("/");
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
        {["Sobre", "Devs", "Profile"].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => history.push(`/${text.toLowerCase()}`)}
          >
            <ListItemIcon>
              {index === 0 ? (
                <LiveHelpIcon />
              ) : index === 1 ? (
                <AssignmentIcon />
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
        <img height="50px" src={KenzieLogo} alt="Kenzie Academy Logo" />
        <h1>Kenzie Hub</h1>
      </div>
      <div className="headerList">
        <ul>
          <li>Sobre</li>

          <li onClick={() => history.push("/devs")}>Devs</li>

          <li onClick={() => history.push("/#")}>Profile/ Username</li>

          <li onClick={logout}>
            <ExitToAppIcon />
          </li>
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
