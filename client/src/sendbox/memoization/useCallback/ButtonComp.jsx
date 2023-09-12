import { Button } from "@mui/material";
import { func, string } from "prop-types";
import { memo } from "react";

const ButtonComp = ({ handlclick, children }) => {
  console.log("Rendering button - ", children);
  return (
    <Button variant="outlined" onClick={handlclick} color="primary">
      {children}
    </Button>
  );
};

ButtonComp.prototype = {
  handlclick: func.isRequired,
  children: string.isRequired,
};

export default memo(ButtonComp);
