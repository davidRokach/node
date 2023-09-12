import { Button } from "@mui/material";

const ChildComp = ({ onVictorClick }) => {
  return (
    <div>
      <Button onClick={() => onVictorClick("Victor")} variant="outlined">
        Victor
      </Button>
    </div>
  );
};

const RaisingEvents = () => {
  const handleClick = (text) => console.log(text);
  return <ChildComp onVictorClick={handleClick}> </ChildComp>;
};
export default RaisingEvents;
