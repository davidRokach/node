import { Box, Container, Paper, Stack, Grid } from "@mui/material";

const LayoutComponents = () => {
  return (
    <>
      <Box>i am a box</Box>
      <Container sx={{ backgroundColor: "green", color: "white" }}>
        in container
      </Container>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Stack m={2} spacing={2} width={250}>
          <Paper sx={{ p: 2 }}>one</Paper>
          <Paper sx={{ p: 2 }}>two</Paper>
          <Paper sx={{ p: 2 }}>three</Paper>
        </Stack>
      </Container>

      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Stack m={2} spacing={2} width={250} direction="row">
          <Paper sx={{ p: 2 }}>one</Paper>
          <Paper sx={{ p: 2 }}>two</Paper>
          <Paper sx={{ p: 2 }}>three</Paper>
        </Stack>
      </Container>

      <Grid container spacing={2}>
        <Grid item xs={10} md={3}>
          <Box sx={{ p: 2, backgroundColor: "success.light" }}>one</Box>
        </Grid>
        <Grid item xs={10} md={6}>
          <Box sx={{ p: 2, backgroundColor: "primary.light" }}>two</Box>
        </Grid>
        <Grid item xs={10} md={3}>
          <Box sx={{ p: 2, backgroundColor: "error.light" }}>three</Box>
        </Grid>
      </Grid>

      <Container sx={{ mt: 2 }}>
        <Grid container rowSpacing={3} columnSpacing={1}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box sx={{ p: 2, backgroundColor: "success.light" }}>one</Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box sx={{ p: 2, backgroundColor: "primary.light" }}>two</Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box sx={{ p: 2, backgroundColor: "error.light" }}>three</Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box sx={{ p: 2, backgroundColor: "secondary.light" }}>four</Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default LayoutComponents;
