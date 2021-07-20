import React from "react";
import { useStyles } from "../About/About.style";

function About() {
  const classes = useStyles();

  return (
    <div className={classes.aboutus}>
      <img
        width="550"
        height="350"
        alt="Hotel Banner"
        src={process.env.PUBLIC_URL + "/images/aboutus.jpg"}
      />
    </div>
  );
}

export default About;
