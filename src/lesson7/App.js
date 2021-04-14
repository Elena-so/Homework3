import "./App.css";
import { useState } from "react";
import ColorList from "./ColorList";
import AddColorFrom from "./AddColorForm";
import ColorProvider from "./ColorProvider"
// import AddColorFormHooks from "./AddColorFormHooks";

import data from "./Data";

import Star from "./Star";

import StarRating from "./StarRating";
import "./App.css";
export default function App() {
  const [colors, setColors] = useState(data);
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

  return (
    <ColorProvider>
      <AddColorFrom onNewColor={addColor} />

      <ColorList colors={colors} onRate={rateColor} onRemove={removeColor} />
    </ColorProvider>
  );
}
