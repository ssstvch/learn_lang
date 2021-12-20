import React from "react"; 
import {
  Drawer,
  List,
  Divider,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import {
  ChangeCircle,
  School,
  FitnessCenter,
  FormatListBulleted
} from "@mui/icons-material";

const LeftMenu = ({openLeftMenu, closeLeftMenu}) => {
  return (
        <React.Fragment>
            <Drawer
              anchor="left"
              open={openLeftMenu}
              onClose={closeLeftMenu}
            >
              <List>
                  {["Learn new words", "Training", "Your word list"].map(
                    (text, index) => (
                      <ListItem button key={text}>
                        <ListItemIcon>
                          {index === 0 && <School />}
                          {index === 1 && <FitnessCenter />}
                          {index === 2 && <FormatListBulleted />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    )
                  )}
              </List>
              <Divider />
              <List>
                  <ListItem key={"changeLanguage"}>
                      <ListItemIcon>
                        <ChangeCircle />
                      </ListItemIcon>
                      <ListItemText primary="Change language" />
                  </ListItem>
              </List>
            </Drawer>
      </React.Fragment>

  );
}

export default LeftMenu