import { AppBar, Toolbar } from "@mui/material";
import NavItem from "../routes/NavItem";
import { Outlet } from "react-router-dom";

const SandBox = () => {
  return (
    <>
      <AppBar position="static" color="transparent" sx={{ mb: "5px" }}>
        <Toolbar>
          <NavItem label="props" color="inherit" to="props" />
          <NavItem label="hooks" color="inherit" to="hooks" />
          <NavItem label="events" color="inherit" to="events" />
          <NavItem label="life cycle hooks" color="inherit" to="life-cycle" />
          <NavItem label="memoization" color="inherit" to="memoization" />
          <NavItem label="todo list" color="inherit" to="todo-list" />
          <NavItem label="context" color="inherit" to="context" />
          <NavItem label="forms" color="inherit" to="forms"></NavItem>
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};
export default SandBox;
