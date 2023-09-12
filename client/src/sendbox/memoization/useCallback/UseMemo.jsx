import { Box, Button, Paper, Typography } from "@mui/material";
import { useMemo, useState } from "react";

const UseMemo = () => {
  const [age, setAge] = useState(1);
  const [height, setHeight] = useState(0);

  const incrementAge = () => setAge(age + 1);
  const incrementHeight = () => setHeight(height + 1);

  const slowFunction = useMemo(() => {
    {
      console.log("slowFunction start");
    }
    for (let i = 0; i < 3_000_000_000; i++) {
      {
        console.log("slowFunction end");
      }
      return age * 2;
    }
  }, [age]);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Paper sx={{ width: 350, mt: 2, p: 2 }}>
        <Box>
          <Typography align="center">Age: {age}</Typography>
          <Typography align="center">Age Multiple: {slowFunction}</Typography>
          <Typography align="center">Height: {height}</Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button onClick={incrementAge}>Age</Button>
            <Button onClick={incrementHeight}>Height</Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default UseMemo;
