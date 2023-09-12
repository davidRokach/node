import MuiCard from "@mui/material/Card";
import CardHead from "./CardHeadComponent";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { CardActionArea } from "@mui/material";
import { func } from "prop-types";
import cardType from "../../models/types/cardType";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

const Card = ({ card, onDelete, onLike }) => {
  const navigate = useNavigate();
  return (
    <MuiCard
      sx={{
        width: 300,
        margin: "auto",
        marginTop: 2,
        padding: 1,
      }}
      raised
    >
      <CardActionArea
        onClick={() => navigate(`${ROUTES.CARD_INFO}/${card._id}`)}
      >
        <CardHead image={card.image} />
        <CardBody
          name={card.title}
          profession={card.profession}
          phone={card.phone}
          email={card.email}
          cardNumber={card.bizNumber}
          address={card.address}
        />
      </CardActionArea>

      <CardActionBar
        cardId={card._id}
        onDelete={onDelete}
        onLike={onLike}
        cardUserId={card.user_id}
        cardsLikes={card.likes}
        card={card}
      />
    </MuiCard>
  );
};
Card.propTypes = {
  card: cardType.isRequired,
  onLike: func.isRequired,
  onDelete: func.isRequired,
};

export default Card;
