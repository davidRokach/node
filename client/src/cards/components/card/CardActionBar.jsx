import { Box, CardActions, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CallIcon from "@mui/icons-material/Call";
import { useUser } from "../../../users/providers/UserProvider";
import { useState } from "react";
import { func, string } from "prop-types";
import CardDeleteDialog from "../../../components/DeleteDialog";
import ROUTES from "../../../routes/routesModel";
import { useNavigate } from "react-router-dom";
import useCards from "../../hooks/useCards";

const CardActionBar = ({
  onDelete,
  onLike,
  cardId,
  cardUserId,
  cardsLikes,
  card,
}) => {
  const [isDialogopen, setDialog] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();
  const { handleLikeCard } = useCards();
  const [isLike, setLike] = useState(() => {
    if (!user) return false;
    return !!cardsLikes.find((id) => id === user._id);
  });

  const handleDialog = (term) => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };
  const handleDeleteCard = () => {
    handleDialog();
    onDelete(cardId);
  };
  const handleLike = async () => {
    setLike(!isLike);
    await handleLikeCard(cardId);
    onLike();
  };

  return (
    <>
      <CardActions
        disableSpacing
        sx={{ paddingTop: 0, justifyContent: "space-between" }}
      >
        <Box>
          {(user?._id === cardUserId || user?.isAdmin) && (
            <IconButton
              aria-label="delete card"
              onClick={() => handleDialog("open")}
            >
              <DeleteIcon />
            </IconButton>
          )}

          {user?._id === cardUserId && (
            <IconButton
              aria-label="edit card"
              onClick={() => navigate(`../${ROUTES.EDIT_CARD}/${cardId}`)}
            >
              <ModeEditIcon />
            </IconButton>
          )}
        </Box>

        <Box>
          <IconButton
            onClick={() => (window.location.href = `tel:${card.phone}`)}
          >
            <CallIcon />
          </IconButton>

          {user && (
            <IconButton aria-label="add to favorites" onClick={handleLike}>
              <FavoriteIcon color={isLike ? "error" : "inherit"} />
            </IconButton>
          )}
        </Box>
      </CardActions>
      <CardDeleteDialog
        isDialogopen={isDialogopen}
        onDelete={handleDeleteCard}
        onChangeDialog={handleDialog}
        object={"card"}
      />
    </>
  );
};

CardActionBar.propTypes = {
  cardId: string.isRequired,
  onDelete: func.isRequired,
  onLike: func.isRequired,
  cardUserId: string.isRequired,
};
export default CardActionBar;
