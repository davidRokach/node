import { Box, Typography } from "@mui/material";
import { number, string } from "prop-types";
import { memo } from "react";

const NumberOfTask = ({ numOfTasks, children }) => {
  console.log("NumberOfTask is rendering, task number: ", numOfTasks);

  return (
    <Box sx={{ border: "black" }}>
      <Typography color="primary">
        {children}: {numOfTasks}
      </Typography>
    </Box>
  );
};
NumberOfTask.prototype = {
  children: string.isRequired,
  numOfTasks: number.isRequired,
};

export default memo(NumberOfTask);
