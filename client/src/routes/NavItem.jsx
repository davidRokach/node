import { string } from "prop-types";
import NavBarLink from "./NavBarLink";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const NavItem = ({ label, to, color }) => {
  return (
    <>
      <NavBarLink to={to} color={color}>
        <Button color="inherit">
          <Typography>{label}</Typography>
        </Button>
      </NavBarLink>
    </>
  );
};

NavItem.protoType = {
  label: string.isRequired,
  to: string.isRequired,
  color: string,
};
export default NavItem;
