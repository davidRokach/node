import {
  Box,
  Card,
  CardActions,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import { useEffect } from "react";
import Spinner from "../../components/Spinner";
import Erorr from "../../components/Error";
import Map from "../../components/Map";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import WebIcon from "@mui/icons-material/Web";

const CardDetailPage = () => {
  const { id } = useParams();
  const { handleGetCard, value } = useCards();
  const { card, isPending, error } = value;
  useEffect(() => {
    handleGetCard(id);
  }, []);

  if (isPending) return <Spinner />;
  if (error) return <Erorr errorMessage={error} />;
  if (!card)
    return (
      <p>
        Oopsi... there are no card in the dadabase that match the parameters you
        enter
      </p>
    );

  return (
    <>
      <Container maxWidth="lg" sx={{ marginBottom: "3vh" }}>
        <PageHeader
          title="card Details"
          subtitle="Here you can find more details about the business card"
        ></PageHeader>
        <Typography variant="h3">{card.title || "no title"}</Typography>
        <Box
          component="img"
          sx={{
            border: "3px solid black",
            borderRadius: "30px",
            width: 500,
            maxWidth: { xs: 500, md: 375 },
          }}
          alt={card.image.alt || "no alt"}
          src={card.image.url}
        />
        <Typography variant="h6">{card.subtitle || "no subtitle"}</Typography>
        <Typography variant="body1">
          {card.description || "no description"}
        </Typography>
      </Container>
      <Card sx={{ width: 170, margin: "auto", marginY: 2, padding: 1 }}>
        <CardActions>
          <IconButton
            onClick={() => (window.location.href = `tel:${card.phone}`)}
          >
            <CallIcon />
          </IconButton>

          <IconButton
            onClick={() =>
              (window.location.href = `mailto:${card.email}?subject=Customer from the site
              )}`)
            }
          >
            <EmailIcon />
          </IconButton>
          <IconButton onClick={() => (window.location.href = card.web)}>
            <WebIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Map address={card.address} />
    </>
  );
};
export default CardDetailPage;
