import { Paper } from "@mui/material";
import { node } from "prop-types";
import { useTheme } from "../../provider/ThemeProvider";

const Main = ({ children }) => {
  const { isDark } = useTheme();
  return (
    <Paper
      sx={{
        minHeight: "90vh",
        backgroundColor: !isDark ? "#e3f2fd" : "#333333",
      }}
    >
      {children}
    </Paper>
  );
};

Main.prototype = {
  children: node.isRequired,
};
export default Main;
