import PropTypeChild from "./PropTypeChild";

const FatherPropTypes = () => {
  const objProp = { key: "hallo", dark: 5, meo: true };
  return (
    <PropTypeChild
      str="string"
      num={2}
      boll={true}
      arr={[1, 2, 3]}
      arr2={[2, 5, 3]}
      aOrB="b"
      objProp={objProp}
      node="yair"
    >
      hello world
    </PropTypeChild>
  );
};
export default FatherPropTypes;
