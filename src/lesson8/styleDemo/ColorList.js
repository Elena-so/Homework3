import React from 'react'

import Color from "./Color";

import { useColors } from "./ColorProvider";

const ColorList = () => {
  const { colors } = useColors();
  return (
    <div>
      {colors.length === 0 ? (
        <p>No Colors Listed. (Add a Color)</p>
      ) : (
          colors.map((c) => <Color key={c.id} {...c} />)
        )}
    </div>
  );
};

export default ColorList;
