import React from 'react';
import {
    Container,
    AppBar,
    Toolbar,
    CardMedia,
    IconButton
} from '@mui/material/';
import { AccountCircle } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu'
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';


const Header = () => {
    const [isRightMenuOpen, setRightMenuOpen] = React.useState(false);
    const [isLeftMenuOpen, setLeftMenuOpen] = React.useState(false);

    return (
        <React.Fragment>
                <AppBar position="static">
                <Container>
                    <Toolbar>
                    <IconButton
                        size="large"
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                        <Container
                            sx={{m:"1vw 19vw"}}
                        >
                            <CardMedia
                                component="img"
                                height="50%"
                                width="50%"
                                image="/images/header_logo.png"
                                alt="Learn languages"
                            />
                        </Container>
                        <IconButton
                            size="large"
                            color="inherit"
                            sx={{flexGrow:1}}
                        >
                            <AccountCircle />
                        </IconButton>
                    </Toolbar>
                    </Container>
                </AppBar>

            <LeftMenu 
                openRightMenu={isLeftMenuOpen}
                closeRightMenu={() => setLeftMenuOpen(false)}
            />
            <RightMenu 
                openRightMenu={isRightMenuOpen}
                closeRightMenu={() => setRightMenuOpen(false)}
            />
        </React.Fragment>
    )
}

export default Header;