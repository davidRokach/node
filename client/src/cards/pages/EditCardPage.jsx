import { Navigate, useNavigate, useParams } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import cardsSchema from "../models/joi-schema/cardsSchema";
import { Container } from "@mui/material";
import mapCardToModel from "../helpers/normalization/mapCardToModel";
import useCards from "../hooks/useCards";
import { useEffect } from "react";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import normalizeCards from "../helpers/normalization/normalizeCards";
import FormInput from "../../forms/components/FormInputs";

const EditCardPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    handleUpdateCard,
    handleGetCard,
    value: { card },
  } = useCards();

  const { user } = useUser();

  const { value, ...rest } = useForm(initialCardForm, cardsSchema, () => {
    handleUpdateCard(card._id, {
      ...normalizeCards(value.formData),
      user_id: card.user_id,
      bizNumber: card.bizNumber,
    });
  });

  useEffect(() => {
    handleGetCard(id).then((data) => {
      if (data.user_id !== user._id) return navigate(ROUTES.CARDS);
      const initialEditCard = mapCardToModel(data);
      rest.setFormData(initialEditCard);
    });
  }, []);

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  const inputFactory = (name, label, required, type) => ({
    name,
    label,
    required,
    type,
  });
  const mapInputs = [
    inputFactory("title", "title", true, "text"),
    inputFactory("subtitle", "subtitle", true, "text"),
    inputFactory("description", "description", true, "text"),
    inputFactory("phone", "phone", true, "phone"),
    inputFactory("email", "email", true, "email"),
    inputFactory("webUrl", "web", true, "text"),
    inputFactory("imageUrl", "image url", true, "text"),
    inputFactory("imageAlt", "image alt", true, "text"),
    inputFactory("state", "state", false, "text"),
    inputFactory("country", "country", true, "text"),
    inputFactory("city", "city", true, "text"),
    inputFactory("street", "street", true, "text"),
    inputFactory("houseNumber", "houseNumber", true, "number"),
    inputFactory("zip", "zip", true, "number"),
  ];

  console.log(card);

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormInput
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onFormChange={rest.validateForm}
        errors={value.errors}
        onInputChange={rest.handleChange}
        data={value.formData}
        title="Edit Card"
        inputs={mapInputs}
      />
    </Container>
  );
};

export default EditCardPage;
