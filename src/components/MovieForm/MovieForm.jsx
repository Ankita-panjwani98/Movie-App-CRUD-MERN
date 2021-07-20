import React from "react";
import Box from "@material-ui/core/Box";
import InputField from "../Textfield/InputField";
import { useStyles } from "../MovieForm/MovieForm.anki";

import ButtonControl from "../Button/ButtonControl";

function MovieForm(props) {
  const classes = useStyles();
  const { onchange, onsubmit, moviesdata, inputErrors } = props;
 
  return (
    <div>
      <Box className={classes.root}>
        <form
          className={classes.form}
          onSubmit={onsubmit}
          noValidate
          autoComplete="off"
        >
          <InputField
            classname={classes.formFields}
            label="Movie Title"
            name="movieTitle"
            onchange={onchange}
            inputValue={moviesdata.movieTitle}
            error={inputErrors.movieTitle}
          />
          <InputField
            classname={classes.formFields}
            label="Movie Genre"
            name="movieGenre"
            onchange={onchange}
            inputValue={moviesdata.movieGenre}
            error={inputErrors.movieGenre}
          />
          <InputField
            classname={classes.formFields}
            label="Movie Cast(Any Hero/Heroine Name)"
            name="movieCast"
            onchange={onchange}
            inputValue={moviesdata.movieCast}
            error={inputErrors.movieCast}
          />
          <InputField
            classname={classes.formFields}
            label="Enter Movie Rating"
            name="movieIMDBRating"
            inputType="number"
            inputProps={{ inputProps: { min: 0, max: 5 } }}
            onchange={onchange}
            inputValue={moviesdata.movieIMDBRating}
            error={inputErrors.movieIMDBRating}
          />
          <ButtonControl
            btnType="submit"
            variant="contained"
            color="primary"
            value="Submit"
            fullWidth
            btnStyle={{
              backgroundColor: "#171a29",
              marginTop: "5%",
              height: "50px",
            }}
          >
            Submit
          </ButtonControl>
        </form>
      </Box>
    </div>
  );
}

export default MovieForm;
