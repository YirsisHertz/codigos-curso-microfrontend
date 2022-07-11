import React from "react";
import ReactDOM from "react-dom";

import ColorPicker from "colorPicker/ColorPicker";
import { useColors } from "./hooks/useColors";

const App = () => {
  const { handleChangeColor, handleSaveColor, color } = useColors();

  return (
    <div className="container">
      <ColorPicker
        handleChangeColor={handleChangeColor}
        handleSaveColor={handleSaveColor}
        color={color}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
