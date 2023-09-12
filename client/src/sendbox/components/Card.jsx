import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import {
  Card,
  CardContent,
  Divider,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { Delete, Edit, LinkedIn, Twitter } from "@mui/icons-material";

const Cards = () => {
  return (
    <>
      <Card
        sx={{ width: 280, margin: "auto", marginTop: 2, padding: 1 }}
        raised
      >
        <CardMedia
          component="img"
          height="170"
          image="https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?w=740&t=st=1678823183~exp=1678823783~hmac=afdffafe410778bd2455211130747fff5057a230927eb7b03f648c4c14d491bc"
        />
        <CardHeader title="David Rokach" subheader="Website builder" />
        <Divider sx={{ marginX: 1 }} />
        <CardContent>
          <Typography textAlign="left">
            <b>Phone:</b> 0545923980
          </Typography>
          <Typography textAlign="left">
            <b>Email:</b> davidrokach@gmail.com
          </Typography>
          <Typography textAlign="left">
            <b>Card Numnber:</b> 01515154
          </Typography>
        </CardContent>
        <Box display="flex">
          <Box>
            <IconButton>
              <Edit />
            </IconButton>
            <IconButton>
              <Delete />
            </IconButton>
          </Box>

          <Box sx={{ marginLeft: "39%" }}>
            <IconButton>
              <Twitter />
            </IconButton>
            <IconButton>
              <LinkedIn />
            </IconButton>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default Cards;
