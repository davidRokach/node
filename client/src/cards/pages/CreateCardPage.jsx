import { Container } from "@mui/material";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useForm from "../../forms/hooks/useForm";
import useCards from "../hooks/useCards";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import cardsSchema from "../models/joi-schema/cardsSchema";
import { useUser } from "../../users/providers/UserProvider";
import FormInput from "../../forms/components/FormInputs";

const CreateCardPage = () => {
  const { handleCreateCard } = useCards();
  const { value, ...rest } = useForm(
    initialCardForm,
    cardsSchema,
    handleCreateCard
  );

  const { user } = useUser();

  if (!user?.isBusiness) return <Navigate replace to={ROUTES.CARDS} />;

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
        title="Create Card"
        inputs={mapInputs}
      />
    </Container>
  );
};

export default CreateCardPage;
