import { AppBar, Container, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavItem from "../../routes/NavItem";

const LifeCycleHooks = () => {
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <NavItem label="Initial" color="inherit" to="initial"></NavItem>
          <NavItem
            label="useState"
            color="inherit"
            to="use-state-cycle"
          ></NavItem>
          <NavItem
            label="useEffect did mount"
            color="inherit"
            to="component-did-mount"
          ></NavItem>
          <NavItem
            label="useEffect did update"
            color="inherit"
            to="component-did-update"
          ></NavItem>
          <NavItem
            label="useEffect will unmount"
            color="inherit"
            to="component-will-unmount"
          ></NavItem>
          <NavItem
            label="useEffect no dependencies"
            color="inherit"
            to="component-no-dependencies"
          ></NavItem>
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default LifeCycleHooks;
