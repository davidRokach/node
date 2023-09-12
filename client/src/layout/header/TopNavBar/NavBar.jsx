import { AppBar, Box, Toolbar } from "@mui/material";
import RightNavBar from "./right-navigation/RightNavBar";
import { LeftNavigation } from "./left-navigations/LeftNavigation";
import SearchBar from "./right-navigation/SearchBar";
import { MenuProvider } from "./menu/MenuProvider";

export const NavBar = () => {
  return (
    <MenuProvider>
      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <LeftNavigation />

          <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
            <SearchBar />
          </Box>

          <RightNavBar />
        </Toolbar>
      </AppBar>
    </MenuProvider>
  );
};
