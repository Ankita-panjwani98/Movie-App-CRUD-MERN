import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import { useStyles } from "../Header/Header.style";
import CloseIcon from "@material-ui/icons/Close";
import ButtonControl from "../Button/ButtonControl";

function Header(props) {
  const classes = useStyles();
  const { openHandleClick } = props;
  const [drawer, setdrawer] = useState(false);
  const handleDrawerToggle = () => {
    setdrawer(!drawer);
  };

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.header}>
        <Toolbar className={classes.navbar}>
          <div>
            <Typography variant="h6" className={classes.title}>
              Movie Adder App
            </Typography>
          </div>
          <Hidden smDown>
            <div className={classes.sideButtons}>
              <Button color="inherit">
                <Link to="/" className={classes.homeBtnLink}>
                Home
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/about" className={classes.homeBtnLink}>
                AboutUs
                </Link>
              </Button>
              <ButtonControl
                variant="outlined"
                btnColor="inherit"
                openHandler={openHandleClick}
                className={classes.homeBtnLink}
              >
                + Add New Movie
              </ButtonControl>
            </div>
          </Hidden>

          <Hidden mdUp>
            <MenuIcon onClick={handleDrawerToggle}  className={classes.menuIcon} />
          </Hidden>
          <Drawer
            open={drawer}
            onClose={handleDrawerToggle}
            anchor="left"
            // transitionDuration={{ enter: 1000, exit: 30000 }}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
            </IconButton>
            <div className={classes.linksDrawer}>
            <Button color="inherit">
                <Link to="/moviesDisplay" className={classes.homeBtnLink}>
                Home
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/about" className={classes.homeBtnLink}>
                AboutUs
                </Link>
              </Button>
              <ButtonControl
                variant="outlined"
                btnColor="inherit"
                openHandler={openHandleClick}
                className={classes.homeBtnLink}
              >
                + Add New Movie
              </ButtonControl>
            </div>
            
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
