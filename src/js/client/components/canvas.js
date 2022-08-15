import { pickLevel } from './helper.js';

export function canvasComponent (targetElement, state) {
  const element = targetElement.cloneNode(true);
  const { height, width } = pickLevel(state);

  element.innerHTML = `
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      height="${height}"
      width="${width}"
      aria-labelledby="level-title"
      aria-describedby="level-desc"
    >
      <title id="level-title"></title>
      <desc id="level-desc"></desc>
      <style>
        text {
          font-size: 0.5em;
        }
      </style>
      <g id="level" data-component="level">
      </g>
    </svg>
  `;

  return element;
}
