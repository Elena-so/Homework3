import React, { useState } from "react";

function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      {checked ? "checked" : "not checked"}
    </div>
  );
}

export default function App() {
  return <Checkbox />;
}
