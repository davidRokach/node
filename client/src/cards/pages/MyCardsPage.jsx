import { useNavigate } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider";
import useCards from "../hooks/useCards";
import ROUTES from "../../routes/routesModel";
import { Container, Fab } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import AddIcon from "@mui/icons-material/Add";
import CardsFeedback from "../components/CardsFeedback";
import { useEffect } from "react";

const MyCardsPage = () => {
  const { value, handleGetmyCards, handleDeleteCard } = useCards();
  const { error, isPending, filteredCards } = value;

  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate(ROUTES.CARDS);
    else handleGetmyCards();
  }, [user]);

  const onDeleteCard = async (cardId) => {
    await handleDeleteCard(cardId); // this will delete the card from the DB
    await handleGetmyCards();
  };

  const handleCardLIke = (_id) => {
    console.log(`you like card namber:${_id}`);
  };

  return (
    <Container sx={{ position: "relative", minHeight: "92vh" }}>
      <PageHeader
        title="My Cards Page"
        subtitle="Here you can find your business cards"
      />
      {filteredCards && (
        <Fab
          onClick={() => navigate(ROUTES.CREATE_CARDS)}
          color="primary"
          aria-label="add"
          sx={{
            position: "absolute",
            bottom: 75,
            right: 16,
          }}
        >
          <AddIcon />
        </Fab>
      )}
      <CardsFeedback
        isPending={isPending}
        error={error}
        cards={filteredCards}
        onDelete={onDeleteCard}
        onLike={handleCardLIke}
      />
    </Container>
  );
};

export default MyCardsPage;
