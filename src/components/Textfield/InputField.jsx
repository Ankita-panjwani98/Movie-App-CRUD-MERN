import React from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "../Textfield/InputField.style";

function InputField(props) {
  const {
    name,
    label,
    classname,
    inputValue,
    inputType,
    error=null,
    onchange,
    inputProps,
  } = props;
  
  console.log("Errors", error);
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      className={classname}
      label={label}
      name={name}
      type={inputType}
      InputProps={inputProps}
      onChange={onchange}
      value={inputValue}
      {...(error && { error: true, helperText: error })}
    />
  );
}

export default InputField;
