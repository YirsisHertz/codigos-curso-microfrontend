import React from "react";
import Swal from "sweetalert2";

const ColorList = ({ colorsList = [], handleClickClearColors }) => {
  const handleCopyColor = (color) => {
    navigator.clipboard.writeText(color);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Color: ${color} Copied!`,
      showConfirmButton: false,
      timer: 1300,
      timerProgressBar: true,
    });
  };

  return (
    <>
      {colorsList.length > 0 && (
        <button
          className="btn btn-danger my-4 w-100"
          onClick={handleClickClearColors}
        >
          Clear List
        </button>
      )}

      <div className="list-group text-center">
        {colorsList.length > 0 ? (
          colorsList.map((color, index) => (
            <button
              key={index}
              type="button"
              className="list-group-item list-group-item-action text-white"
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
          ))
        ) : (
          <div className="alert alert-danger" role="alert">
            <b>Sin elementos por mostrar...</b>
          </div>
        )}
      </div>
    </>
  );
};

export default ColorList;
