import React from "react";
import Box from "@mui/material/Box";
import NavItem from "../../../../routes/NavItem";
import ROUTES from "../../../../routes/routesModel";

const NotLogged = () => {
  return (
    <Box>
      <NavItem label="singup" to={ROUTES.SINGUP} />
      <NavItem label="login" to={ROUTES.LOGIN} />
    </Box>
  );
};

export default NotLogged;
