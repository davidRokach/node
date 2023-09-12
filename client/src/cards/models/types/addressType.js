import { number, shape, string } from "prop-types";

const addressType = shape({
  state: string.isRequired,
  country: string.isRequired,
  city: string.isRequired,
  street: string.isRequired,
  houseNumber: number.isRequired,
  zip: number,
});
export default addressType;
