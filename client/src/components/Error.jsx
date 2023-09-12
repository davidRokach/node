import { Button, Container, Grid, Typography } from "@mui/material";
import { string } from "prop-types";

const Erorr = ({ errorMessage }) => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" color="initial">
            oops... somting went worng: {errorMessage}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} justifyContent="center">
          <img
            width="100%"
            src="https://s3.amazonaws.com/images.seroundtable.com/t-google-404-1299071983.jpg"
            alt="broken robot"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

Erorr.prototype = {
  errorMessage: string.isRequired,
};
export default Erorr;
