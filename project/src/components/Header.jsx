import React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  CardMedia,
  IconButton,
} from "@mui/material/";
import { AccountCircle } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { Link } from "react-router-dom";

const Header = ({ gamePath, homePath }) => {
  const [isRightMenuOpen, setRightMenuOpen] = React.useState(false);
  const [isLeftMenuOpen, setLeftMenuOpen] = React.useState(false);

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              color="inherit"
              onClick={() => setLeftMenuOpen(!isLeftMenuOpen)}
            >
              <MenuIcon />
            </IconButton>
            <Container sx={{ m: "1vw 19vw" }}>
              <Link to="/">
                <CardMedia
                  component="img"
                  height="50%"
                  width="50%"
                  image="/images/header_logo.png"
                  alt="Learn languages"
                />
              </Link>
            </Container>
            <IconButton
              size="large"
              color="inherit"
              sx={{ flexGrow: 1 }}
              onClick={() => setRightMenuOpen(!isRightMenuOpen)}
            >
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <LeftMenu
        openLeftMenu={isLeftMenuOpen}
        closeLeftMenu={() => setLeftMenuOpen(!isLeftMenuOpen)}
        gamePath={gamePath}
        homePath={homePath}
      />

      <RightMenu
        openRightMenu={isRightMenuOpen}
        closeRightMenu={() => setRightMenuOpen(!isRightMenuOpen)}
      />
    </React.Fragment>
  );
};

export default Header;
