import React, { useEffect, useState } from "react";

import { useColors } from "colorPicker/useColors";

const ColorList = () => {
  const [colorList, setColorList] = useState([]);
  const { colorsList } = useColors();

  useEffect(() => {
    setColorList(colorsList);
    console.log(colorList);
  }, [colorList]);

  return (
    <div className="list-group text-center">
      {colorList.map((color, index) => (
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
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColorList;
