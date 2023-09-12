import { Container } from "@mui/material";
import { useState } from "react";

const UseStateCycle = () => {
  const [count, setCount] = useState(() => {
    console.log("in useState function");
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 2000);
    return 0;
  });

  return (
    <Container maxWidth="lg">
      {console.log(new Date().toLocaleTimeString())}
      <h2> Count: {count}</h2>
    </Container>
  );
};
export default UseStateCycle;
