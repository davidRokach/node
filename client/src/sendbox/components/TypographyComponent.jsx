import {
  Box,
  Button,
  Chip,
  Divider,
  Typography,
  IconButton,
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import { Send, AddShoppingCart, Delete } from "@mui/icons-material";

const TypographyComponent = () => {
  return (
    <>
      <Typography variant="h4" component="span">
        One
      </Typography>

      <Typography variant="h4" color="primary.light" fontWeight={300}>
        light 300
      </Typography>
      <Typography variant="h4" color="primary.main" fontWeight={400}>
        main 400
      </Typography>

      <Typography variant="h4" color="primary.dark" fontWeight={700}>
        dark 700
      </Typography>

      <Typography
        align="center"
        variant="h4"
        color="error.light"
        fontWeight={300}
      >
        light 300
      </Typography>
      <Typography align="left" variant="h4" color="error.main" fontWeight={400}>
        main 400
      </Typography>

      <Typography
        align="right"
        variant="h4"
        color="error.dark"
        fontWeight={700}
      >
        dark 700
      </Typography>

      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
        officia dignissimos harum natus quis autem, magnam voluptate sed saepe
        et ducimus, dolorem ab officiis illum sapiente sunt quasi doloremque
        nesciunt!
      </Typography>
      <hr />
      <Typography noWrap>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
        officia dignissimos harum natus quis autem, magnam voluptate sed saepe
        et ducimus, dolorem ab officiis illum sapiente sunt quasi doloremque
        nesciunt!
      </Typography>
      <Divider />
      <Typography
        sx={{
          color: "warning.contrastText",
          backgroundColor: "warning.main",
          padding: "2",
          textAlign: "centers",
          width: "30%",
          margin: "auto",
          borderRadius: "20px",
          boxShadow: "3",
          cursor: "pointer",
        }}
      >
        sx
      </Typography>

      <Divider></Divider>
      <Box display="flex">
        <Typography p={1}>item 1</Typography>
        <Divider orientation="vertical" flexItem>
          center
        </Divider>
        <Typography p={1}>item 2</Typography>
        <Divider textAlign="right" orientation="vertical" flexItem>
          left
        </Divider>
        <Typography p={1}>item 3</Typography>
        <Divider textAlign="left" orientation="vertical" flexItem>
          right
        </Divider>
        <Typography p={1}>item 4</Typography>
      </Box>

      <Typography p={1}>item 1</Typography>
      <Divider orientation="vertical">center</Divider>
      <Typography p={1}>item 2</Typography>
      <Divider textAlign="right">left</Divider>
      <Typography p={1}>item 3</Typography>
      <Divider textAlign="left">
        <Chip label="2" />
      </Divider>
      <Typography p={1}>item 4</Typography>

      <Box m={2}>
        <Button
          size="large"
          variant="contained"
          color="success"
          endIcon={<Send />}
        >
          Send
        </Button>
        <Button
          size="medium"
          variant="outlined"
          color="warning"
          endIcon={<AddShoppingCart />}
        >
          maybe
        </Button>
        <Button size="small" variant="text" color="info" endIcon={<Delete />}>
          cancel
        </Button>
        <br />
        <br />
        <IconButton size="large" color="success" aria-label="send">
          <Delete />
        </IconButton>
      </Box>
      <Card sx={{ width: 250, margin: "auto" }} raised>
        <CardActionArea>
          <CardHeader
            title="card header"
            subheader=" card subheader"
          ></CardHeader>
          <CardMedia
            component="img"
            height="140"
            image="https://wine-direct.co.il/wp-content/uploads/2020/09/godet-xo-terre-cognac-1.jpg"
            alt="קוניאק"
          />
          <CardContent>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              at, tempore temporibus, esse eum, perspiciatis debitis laborum
              odio dolor
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
export default TypographyComponent;
