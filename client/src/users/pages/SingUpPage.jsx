import { Checkbox, Container, FormControlLabel, Grid } from "@mui/material";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useUsers from "../hooks/useUsers";
import useForm from "../../forms/hooks/useForm";
import { useUser } from "../providers/UserProvider";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import signupSchema from "../models/joi-schema/singupSchema";
import FormInput from "../../forms/components/FormInputs";

const SignupPage = () => {
  const { handleSingup } = useUsers();
  const { value, ...rest } = useForm(
    initialSignupForm,
    signupSchema,
    handleSingup
  );

  const { user } = useUser();

  if (user) return <Navigate replace to={ROUTES.CARDS} />;

  const inputFactory = (name, label, required, type) => ({
    name,
    label,
    required,
    type,
  });

  const mapInputs = [
    inputFactory("first", "first name", true, "text"),
    inputFactory("middle", "middle name", false, "text"),
    inputFactory("last", "last name", true, "text"),
    inputFactory("phone", "phone", true, "phone"),
    inputFactory("email", "email", true, "email"),
    inputFactory("password", "password", true, "password"),
    inputFactory("url", "image url", false, "text"),
    inputFactory("imageAlt", "image alt", false, "text"),
    inputFactory("state", "state", false, "text"),
    inputFactory("country", "country", true, "text"),
    inputFactory("city", "city", true, "text"),
    inputFactory("street", "street", true, "text"),
    inputFactory("houseNumber", "houseNumber", true, "number"),
    inputFactory("zip", "zip", false, "number"),
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
        title="Sing Up"
        inputs={mapInputs}
      >
        <Grid item>
          <FormControlLabel
            onChange={(e) =>
              rest.setFormData({
                ...value.formData,
                isBusiness: e.target.checked,
              })
            }
            name="isBusiness"
            control={
              <Checkbox checked={value.formData.isBusiness} color="primary" />
            }
            label="Signup as Business"
          ></FormControlLabel>
        </Grid>
      </FormInput>
    </Container>
  );
};

export default SignupPage;
