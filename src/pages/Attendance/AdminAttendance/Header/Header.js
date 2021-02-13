import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HomeIcon from "@material-ui/icons/Home";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import styles from "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { Link, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  icons: {
    fill: blue[500],
    fontSize: 20,
    marginRight: 5,
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={styles.container}>
      <Typography variant="body2">
        <Link>
          <ArrowBackIcon className={classes.icons}></ArrowBackIcon>
        </Link>
        Attendance List
      </Typography>

      <Breadcrumbs separator=">">
        <Link color="inherit" href="#">
          <Typography variant="body2">
            <HomeIcon className={classes.icons}></HomeIcon>
            Home
          </Typography>
        </Link>
        <Link color="inherit" href="#">
          <Typography variant="body2">Employee</Typography>
        </Link>
        <Typography variant="body2" color="textPrimary" href="#">
          Attendance List
        </Typography>
      </Breadcrumbs>
    </div>
  );
};

export default Header;
