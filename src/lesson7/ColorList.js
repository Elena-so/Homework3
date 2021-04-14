import PropTypes from "prop-types";
import Color from "./Colors";
import { useColors } from "./ColorProvider";

const ColorList = () => {
  console.log(useColors())
  const { colors } = useColors();
  return (
    <div>
      {colors.length === 0 ? (
        <p>No Colors Listed. (Add a Color)</p>
      ) : (
          colors.map((color) => <Color key={color.id} {...color} />)
        )}
    </div>
  );
};

ColorList.propTypes = {
  colors: PropTypes.array,
  onRate: PropTypes.func,
  onRemove: PropTypes.func,
};

export default ColorList;
