import React from "react";
import Button from "@material-ui/core/Button";
function ButtonControl(props) {
  const {
    openHandler,
    btnType,
    btnStyle,
    children,
    btnColor,
    classname,
    variant,
    ...rest
  } = props;
  return (
    <Button
      variant={variant || "outlined"}
      onClick={openHandler}
      color={btnColor}
      type={btnType}
      style={btnStyle}
      className={classname}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default ButtonControl;
