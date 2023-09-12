import Joi from "joi";
import { func, object } from "prop-types";
import { useCallback, useMemo, useState } from "react";

const useForm = (initialForm, schema, handleSubmit) => {
  //data for the all form
  const [formData, setFormData] = useState(initialForm);
  //errors for the all form
  const [errors, setErrors] = useState({});

  //handle for empty all the inputs(formData) and errors
  const handleReset = useCallback(() => {
    setFormData(initialForm);
    setErrors({});
  }, [initialForm]);

  //Checking for errors in the input according to the joi that came from schema
  const validateProperty = useCallback(
    ({ name, value }) => {
      const obj = { [name]: value };
      const generateSchema = Joi.object({ [name]: schema[name] });
      const { error } = generateSchema.validate(obj);
      return error ? error.details[0].message : null;
    },
    [schema]
  );

  //handle which is activated with every change and checks for errors with validateProperty
  const handleChange = useCallback(
    ({ target }) => {
      //target = <input name="username" value="naor"></input>
      const { name, value } = target;
      const errorMessage = validateProperty(target);
      if (errorMessage)
        setErrors((prev) => ({ ...prev, [name]: errorMessage }));
      else
        setErrors((prev) => {
          let obj = { ...prev };
          delete obj[name];
          return obj;
        });

      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    [validateProperty]
  );

  //check for errors for the all form and disabled/activated the submit button
  const validateForm = useCallback(() => {
    const schemaForValidate = Joi.object(schema);
    const { error } = schemaForValidate.validate(formData);
    if (error) return error;
    return null;
  }, [schema, formData]);

  //submit all the data form the form to server
  const onSubmit = useCallback(() => {
    handleSubmit(formData);
  }, [handleSubmit, formData]);

  // return all the data and the errors form the form
  const value = useMemo(() => {
    return { formData, errors };
  }, [formData, errors, setFormData, setErrors]);

  return {
    value,
    onSubmit,
    handleChange,
    handleReset,
    validateForm,
    setFormData,
  };
};

useForm.propTypes = {
  initialForm: object.isRequired,
  schema: object.isRequired,
  handleSubmit: func.isRequired,
};

export default useForm;
