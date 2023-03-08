const colors = [
  "#166250",
  "#19A26C",
  "#B4D367",
  "#FAED5E",
  "#DC3F18",
  "#142631",
  "#328988",
  "#FDF9E4",
  "#F5AE40",
  "#E63330",
];

export function addColor(id: string) {
  const numberId = Number(id);

  const colorIndex = isNaN(numberId)
    ? // get a random color if the id is not a number
      Math.round(Math.random() * (colors.length - 1))
    : // otherwise calculate a unique color for id
      numberId % 10;

  return colors[colorIndex];
}
