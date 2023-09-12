import React from "react";
import Spinner from "../../components/Spinner";
import Erorr from "../../components/Error";
import Cards from "./Cards";
import { arrayOf, bool, func, object, string } from "prop-types";
import Card from "./card/Card";

const CardsFeedback = ({
  error,
  cards,
  isPending,
  onDelete,
  onLike,
  card = null,
}) => {
  if (isPending) return <Spinner />;
  if (error) return <Erorr errorMessage={error} />;

  if (cards && cards.length)
    return <Cards cards={cards} onDelete={onDelete} onLike={onLike} />;
  if (card)
    return <Card card={card} onDelete={onDelete} onLike={onLike}></Card>;

  return (
    <p>
      Oopsi... there are no card in the dadabase that match the parameters you
      enter
    </p>
  );
};
CardsFeedback.prototype = {
  isPending: bool.isRequired,
  error: string,
  cards: arrayOf(object),
  onDelete: func.isRequired,
};
CardsFeedback.defaultProps = {
  onLike: () => {},
};

export default CardsFeedback;
