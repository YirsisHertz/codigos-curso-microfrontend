import React from "react";
import { useColors } from "../hooks/useColors";

const ColorPicker = () => {
  const { color, handleChangeColor, handleSaveColor } = useColors();

  return (
    <>
      <form onSubmit={handleSaveColor}>
        <input
          type="color"
          className="form-control"
          title="Selecciona un color..."
          style={{
            width: "100%",
            height: "300px",
          }}
          value={color}
          onChange={handleChangeColor}
        />

        <div className="text-center">
          <h2 className="mt-3 fw-bolder">
            <div
              style={{
                width: "20px",
                height: "20px",
                background: color,
                display: "inline-block",
                margin: "0 1rem",
                borderRadius: "100%",
              }}
            ></div>
            {color}
          </h2>
          <button type="submit" className="btn btn-success">
            Guardar Color
          </button>
        </div>
      </form>
    </>
  );
};

export default ColorPicker;
