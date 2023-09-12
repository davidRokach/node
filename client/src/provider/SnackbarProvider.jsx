import { Alert, Snackbar } from "@mui/material";
import { node } from "prop-types";
import { createContext, useCallback, useContext, useState } from "react";

const SnackbarContext = createContext();

const SnackbarProvider = ({ children }) => {
  const [isSnckbarOpen, setSnckbarOpen] = useState(false);
  const [snackMessage, setSnckbarMessage] = useState("in snackbar!");
  const [snackColor, setSnackColor] = useState("success");
  const [snackVariant, setSnackVariant] = useState("filled");

  const setSnack = useCallback(
    (message, color, variant = "filled") => {
      setSnckbarOpen(true);
      setSnackColor(color);
      setSnackVariant(variant);
      setSnckbarMessage(message);
    },
    [setSnckbarOpen, setSnackColor, setSnackVariant, setSnckbarMessage]
  );

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isSnckbarOpen}
        onClose={() => setSnckbarOpen(false)}
        autoHideDuration={6000}
      >
        <Alert
          severity={snackColor}
          variant={snackVariant}
          onClose={() => setSnckbarOpen(false)}
        >
          {snackMessage}
        </Alert>
      </Snackbar>
      <SnackbarContext.Provider value={setSnack}>
        {children}
      </SnackbarContext.Provider>
    </>
  );
};

SnackbarProvider.prototype = {
  children: node.isRequired,
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) throw new Error(" useTheme must be within a MuiThemeProvider");
  return context;
};

export default SnackbarProvider;
