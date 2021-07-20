import { makeStyles } from "@material-ui/core/styles";
export const drawerWidth = 300;
export let useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#061147",
    color: "white",
    boxShadow: "0px 0px 0px 0px",
  },
  title: {
    fontFamily: "Kaushan Script, cursive",
    wordSpacing: ".5em",
    fontSize: "1.75rem",
  },

  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "80px",
    padding: "0 12%",
  },

  homeBtnLink: {
    textDecoration: "none",
    color: "white",
  },

  sideButtons: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },

  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuIcon: {
    cursor: "pointer",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#061147",
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
    color: 'white'
  },
  contactLink: {
    color: "white",
  },
  linksDrawer: {
    display: "flex",
    flexDirection: "column",
  },
  searchicon: {
    color: "white",
  },
}));
