import { number, shape, string } from "prop-types";
import addressType from "./addressType";
import imageType from "./imageType";

const cardType = shape({
  _id: string.isRequired,
  title: string.isRequired,
  subtitle: string.isRequired,
  phone: string.isRequired,
  email: string.isRequired,
  bizNumber: number.isRequired,
  image: imageType,
  address: addressType,
  createdAt: string.isRequired,
});

export default cardType;
