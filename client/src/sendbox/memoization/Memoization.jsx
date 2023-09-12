import { AppBar, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavItem from "../../routes/NavItem";

const Memoization = () => {
  return (
    <>
      <AppBar position="static" color="transparent" sx={{ mb: "5px" }}>
        <Toolbar>
          <NavItem label="use Callback" color="inherit" to="use-callback" />
          <NavItem label="use memo" color="inherit" to="use-memo" />
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};
export default Memoization;
