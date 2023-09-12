import { Box, Grid, Typography } from "@mui/material";
import Card from "./card/Card";

const Cards = ({ cards, onDelete, onLike }) => {
  if (!cards.length) {
    return (
      <Typography>Ooops it seams that there are no cards to show</Typography>
    );
  }

  return (
    <Grid container spacing={2} pb={2}>
      {cards.map((card) => {
        return (
          <Grid item xs={12} md={4} key={card._id}>
            <Box>
              <Card
                key={card._id}
                card={card}
                onDelete={onDelete}
                onLike={onLike}
              />
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Cards;
