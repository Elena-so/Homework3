import "./styles/App.css";
import Star from "./Star";
import StarRating from "./StarRating";

import { Component, useState } from "react";
import Color from "./Color";
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";
import data from "./data";

import "./styles/App.css";
import styles from "./styles/App.module.css";

import styled from "styled-components";

import logo from "./assets/logo192.png";
import "./styles/App.scss";

import { ReactComponent as Logo } from "./assets/logo192.png";
import ColorProvider from "./ColorProvider"

const StyleContainer = styled.div`
  width: 400px;
  margin: auto;
  padding: 20px;
  background: pink;
  color: #171212;
  text-align: center;
`;

// import AddColorFormHooks from "./AddColorFormHooks";
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
      <AddColorForm onNewColor={addColor} />

      <ColorList colors={colors} onRate={rateColor} onRemove={removeColor} />
    </ColorProvider>
  );
}
