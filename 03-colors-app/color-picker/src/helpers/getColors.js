export const getColorList = () => {
  return JSON.parse(localStorage.getItem("colors")) || [];
};

export const getLastColor = () => {
  const listColors = getColorList();

  return listColors[0] || "#000000";
};
