import React from 'react';
import {
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText
  } from "@mui/material";
import { Logout, Settings } from '@mui/icons-material';

const RightMenu = ({openRightMenu, closeRightMenu}) => {
    return (
        <React.Fragment key={"rightMenu"}>
            <Drawer
                anchor="right"
                open={openRightMenu}
                onClose={closeRightMenu}
            >
                <List>
                    <ListItem>
                        <ListItemIcon key="accountSettings">
                            <Settings /> 
                        </ListItemIcon>
                        <ListItemText primary="Account settings" />
                    </ListItem>
                    <Divider />
                    <ListItem key="logout">
                        <ListItemIcon>
                            <Logout />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>
            </Drawer>
        </React.Fragment>
    )
}

export default RightMenu