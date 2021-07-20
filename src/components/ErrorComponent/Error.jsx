import React from 'react'
import { useStyles } from "../ErrorComponent/Error.style";

function Error() {
    const classes = useStyles();

    return (
        <div className={classes.aboutus}>
        <img
          width="550"
          height="350"
          alt="Hotel Banner"
          src={process.env.PUBLIC_URL + "/images/404Page.jpg"}
        />
      </div>
    )
}

export default Error
