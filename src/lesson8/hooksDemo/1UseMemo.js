import React, { useEffect, useState, useMemo } from "react";

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender);
  }, []);
};

function WordCount({ children = "" }) {
  useAnyKeyToRender();

  const words = useMemo(() => children.split(" "), [children]);

  useEffect(() => {
    console.log("fresh render");
  }, [words]);

  return (
    <div>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </div>
  );
}

export default function App() {
  return <WordCount>You are not going to believe this but...</WordCount>;
}
