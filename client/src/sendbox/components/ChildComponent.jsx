import { Box, Typography } from "@mui/material";

const ChildComp = ({ str, firstName, lastName }) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.dark",
          width: "100%",
          height: "100%",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Typography variant="h1"> child component</Typography>
        <Typography>{str}</Typography>
        <Typography>
          {firstName} - {lastName}
        </Typography>
      </Box>
    </>
  );
};

export default ChildComp;
