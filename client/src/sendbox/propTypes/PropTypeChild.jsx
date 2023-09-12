import PropTypes, { shape, string } from "prop-types";

const imageType = shape({
  url: string,
  alt: string,
});

const PropTypeChild = ({
  str,
  num,
  boll,
  arr,
  arr2,
  objProp,
  name,
  children,
  node,
}) => {
  return (
    <div>
      PropTypeChild, {str} {num} {arr2} {name} {children} {node}
    </div>
  );
};
PropTypeChild.propTypes = {
  str: PropTypes.string,
  num: PropTypes.number,
  boll: PropTypes.bool,
  arr: PropTypes.array,
  arr2: PropTypes.arrayOf(PropTypes.number),
  obj: PropTypes.objectOf(PropTypes.string),
  numOrStr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  aOrB: PropTypes.oneOf(["a", "b"]),
  objProp: PropTypes.exact({
    key: PropTypes.string,
    dark: PropTypes.number,
    meo: PropTypes.bool,
    image: imageType,
  }),

  node: PropTypes.node,
  children: PropTypes.string,
};
PropTypeChild.defaultProps = {
  name: "david",
};

export default PropTypeChild;
