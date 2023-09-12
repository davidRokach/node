import { AppBar, Container, Toolbar } from "@mui/material";
import NavItem from "../../routes/NavItem";
import { Outlet } from "react-router-dom";

const Hooks = () => {
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <NavItem label="Set Array" color="inherit" to="SetArray" />
          <NavItem label="Set Counter" color="inherit" to="SetCounter" />
          <NavItem label="Set Object" color="inherit" to="SetObject" />
          <NavItem label="Set Post" color="inherit" to="SetPost" />
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Outlet />
      </Container>
    </>
  );
};
export default Hooks;
