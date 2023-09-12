import Joi from "joi";
import useForm from "../../forms/hooks/useForm";
import { Container } from "@mui/material";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import { memo } from "react";
import ROUTES from "../../routes/routesModel";

const FormsTest = () => {
  const handleSubmit = (data) => console.log(data);

  const schema = {
    first: Joi.string().min(2).required(),
    last: Joi.string().min(2).required(),
  };

  const INITIAL_FROM = { first: "", last: "" };

  const { value, ...rest } = useForm(INITIAL_FROM, schema, handleSubmit);

  return (
    <Container
      sx={{
        marginTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        title="enter name"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onChange={rest.validateForm}
        styles={{ maxWidth: "450px" }}
        to={ROUTES.SANDBOX}
      >
        <Input
          label="first"
          name="first"
          type="first"
          error={value.errors.first}
          handleChange={rest.handleChange}
          data={value.formData}
        />
        <Input
          label="last"
          name="last"
          type="last"
          error={value.errors.last}
          handleChange={rest.handleChange}
          data={value.formData}
        />
      </Form>
    </Container>
  );
};

export default memo(FormsTest);
