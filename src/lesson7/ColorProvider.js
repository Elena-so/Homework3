import React, { createContext, useState, useContext } from "react";

import data from "./Data";

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(data);
  const addColor = (title, color) => {
    const newColors = [
      ...colors,
      {
        id: Math.random(),
        title,
        color,
        rating: 3,
      },
    ];
    setColors(newColors);
  };
  const removeColor = (id) => {
    const newColors = colors.filter((color) => color.id !== id);
    setColors(newColors);
  };
  const rateColor = (id, rating) => {
    const newColors = colors.map((color) =>
      color.id !== id
        ? color
        : {
            ...color,
            rating,
          }
    );
    setColors(newColors);
  };
  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      {children}
    </ColorContext.Provider>
  );
}
