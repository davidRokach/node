import { Box, IconButton } from "@mui/material";
import { useTheme } from "../../../../provider/ThemeProvider";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchBar from "./SearchBar";
import NotLogged from "./NotLogged";
import Logged from "./Logged";
import MoreButton from "./MoreButton";
import { useUser } from "../../../../users/providers/UserProvider";

const RightNavBar = () => {
  let anchorEl = null;

  const { user } = useUser();

  const setAnchorEl = (target) => {
    anchorEl = target;
  };

  const { isDark, toggleDarkMode } = useTheme();
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <SearchBar />

        <IconButton aria-label="theme button" onClick={() => toggleDarkMode()}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        {!user && <NotLogged />}

        {user && <Logged setAnchorEl={setAnchorEl} />}
      </Box>

      <MoreButton onClick={setAnchorEl} />
    </>
  );
};
export default RightNavBar;
