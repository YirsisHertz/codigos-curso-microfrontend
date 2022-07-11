import React from "react";
import Swal from "sweetalert2";

const ColorList = ({ colorsList }) => {
  const handleCopyColor = (color) => {
    navigator.clipboard.writeText(color);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Color: ${color} Copied!`,
      showConfirmButton: false,
      timer: 1500,
    });
  }; //

  return (
    <div className="list-group text-center">
      {colorsList.map((color, index) => (
        <button
          key={index}
          type="button"
          className="list-group-item list-group-item-action"
          aria-current="true"
          title="Copiar"
          style={{
            background: color,
            fontWeight: "bolder",
          }}
          onClick={() => handleCopyColor(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColorList;
