import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FitnessCenter, FormatListBulleted } from "@mui/icons-material";
import { Link } from "react-router-dom";

const LeftMenu = ({ openLeftMenu, closeLeftMenu, gamePath, homePath }) => {
  const leftMenuList = [
    { id: "01", name: "Training", path: `/game` },
    { id: "02", name: "Your words list", path: `/` },
  ];

  return (
    <React.Fragment>
      <Drawer anchor="left" open={openLeftMenu} onClose={closeLeftMenu}>
        <List>
          {leftMenuList.map((_, index) => (
            <Link to={_.path}>
              <ListItem button key={_.id} sx={{ paddingRight: "3vw" }}>
                <ListItemIcon>
                  {index === 0 && <FitnessCenter />}
                  {index === 1 && <FormatListBulleted />}
                </ListItemIcon>
                <ListItemText primary={_.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default LeftMenu;
