import { Box } from "@mui/material";
import Logo from "../Logo/Logo";
import NavItem from "../../../../routes/NavItem";
import ROUTES from "../../../../routes/routesModel";
import LogoIcon from "../Logo/LogoIcon";
import { useUser } from "../../../../users/providers/UserProvider";

export const LeftNavigation = () => {
  const { user } = useUser();
  return (
    <Box>
      <LogoIcon />
      <Logo />
      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <NavItem label="About" to={ROUTES.ABOUT} />
        {user?.isBusiness && (
          <>
            <NavItem label="My Cards" to={ROUTES.MY_CARDS} />
            <NavItem label="Fav Cards" to={ROUTES.FAV_CARDS} />
          </>
        )}
        <NavItem label="Sandbox" to={ROUTES.SANDBOX} />
      </Box>
    </Box>
  );
};
