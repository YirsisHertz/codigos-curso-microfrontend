import { useEffect, useState } from "react";
import { getColorList, getLastColor } from "../helpers/getColors";

export const useColors = () => {
  const [color, setColor] = useState(getLastColor());
  const [colorsList, setColorsList] = useState(getColorList());

  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };

  const handleSaveColor = (e) => {
    e.preventDefault();

    const copyColors = [color, ...colorsList];

    setColorsList(copyColors);
  };

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colorsList));
  }, [colorsList]);

  return {
    color,
    colorsList,
    handleChangeColor,
    handleSaveColor,
  };
};
