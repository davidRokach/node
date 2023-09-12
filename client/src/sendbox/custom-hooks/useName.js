import { string } from "prop-types";

const useName = (initialState = "") => {
  const [name, setName] = useState(initialState);

  return [name, setName];
};
useName.prototype = {
  initialState: string,
};

export default useName;
