import React from "react";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Logout, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";

const RightMenu = ({ openRightMenu, closeRightMenu }) => {
  const rightMenuList = [
    { id: "01", name: "Account settings", path: `/*` },
    { id: "02", name: "Logout", path: `/*` },
  ];
  return (
    <React.Fragment key={"rightMenu"}>
      <Drawer anchor="right" open={openRightMenu} onClose={closeRightMenu}>
        <List>
          <Link to={rightMenuList[0].path} onClick={closeRightMenu}>
            <ListItem>
              <ListItemIcon key={rightMenuList[0].id}>
                <Settings />
              </ListItemIcon>
              <ListItemText primary={rightMenuList[0].name} />
            </ListItem>
          </Link>
          <Divider />
          <Link to={rightMenuList[1].path} onClick={closeRightMenu}>
            <ListItem key={rightMenuList[1].id}>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary={rightMenuList[1].name} />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default RightMenu;
