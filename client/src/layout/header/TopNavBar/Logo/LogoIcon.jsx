import { Avatar } from "@mui/material";
import NavBarLink from "../../../../routes/NavBarLink";
import ROUTES from "../../../../routes/routesModel";
import IconButton from "@mui/material/IconButton";

const LogoIcon = () => {
  return (
    <NavBarLink to={ROUTES.CARDS}>
      <IconButton
        sx={{ display: { xs: "inline-flex", md: "none" } }}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <Avatar alt="business card" src="/assets/images/business-card.png" />
      </IconButton>
    </NavBarLink>
  );
};
export default LogoIcon;
