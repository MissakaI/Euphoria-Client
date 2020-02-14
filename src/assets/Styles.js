import {makeStyles} from '@material-ui/core/styles';
import {container, primaryColor} from "./jss/material-kit-react";

export const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }));

  export const footerStyle = makeStyles(theme => ({
    block: {
      color: "inherit",
      padding: "0.9375rem",
      fontWeight: "500",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "3px",
      textDecoration: "none",
      position: "relative",
      display: "block"
    },
    left: {
      float: "left!important",
      display: "block"
    },
    right: {
      padding: "15px 0",
      margin: "0",
      float: "right!important"
    },
    footer: {
      padding: "0.9375rem 0",
      textAlign: "center",
      display: "flex",
      zIndex: "2",
      position: "relative"
    },
    a: {
      color: primaryColor,
      textDecoration: "none",
      backgroundColor: "transparent"
    },
    footerWhiteFont: {
      "&,&:hover,&:focus": {
        color: "#FFFFFF"
      }
    },
    container,
    list: {
      marginBottom: "0",
      padding: "0",
      marginTop: "0"
    },
    inlineBlock: {
      display: "inline-block",
      padding: "0px",
      width: "auto"
    },
    icon: {
      width: "18px",
      height: "18px",
      position: "relative",
      top: "3px"
    },
  }
  ));

export const signInStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));