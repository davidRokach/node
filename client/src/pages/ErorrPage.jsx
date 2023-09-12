import { Button, Container, Grid, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader";

const ErorrPage = () => {
  return (
    <Container>
      <PageHeader title="Error 404" subtitle="Page not found"></PageHeader>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" color="initial">
            The page you are looking for does not exsit
          </Typography>
          <Button variant="text" color="primary">
            Go to home page
          </Button>
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
export default ErorrPage;
