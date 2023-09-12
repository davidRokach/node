import { CardMedia } from "@mui/material";
import cardType from "../../models/types/cardType";
// import cardType from "../../models/types/cardType";

const CardHead = ({ image }) => {
  const { url, alt } = image;
  return (
    <>
      <CardMedia component="img" height="170" image={url} alt={alt} />
    </>
  );
};

CardHead.prototype = {
  cardId: cardType._id,
};
export default CardHead;
