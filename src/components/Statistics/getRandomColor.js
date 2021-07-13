const randomColor = () => Math.round(Math.random() * 256);
const randomRGBColor = callback =>
  `rgb(${callback()}, ${callback()}, ${callback()})`;

export { randomColor, randomRGBColor };

