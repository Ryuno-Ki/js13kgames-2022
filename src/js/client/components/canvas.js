import { pickLevel } from './helper.js';

/**
 * Component to render SVG
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../state/reducers/index.js').State} state
 * @returns {HTMLElement}
 */
export function canvasComponent (targetElement, state) {
  const element = /** @type {HTMLDivElement} */(targetElement.cloneNode(true));
  const { height, width } = pickLevel(state);

  element.innerHTML = `
    <div>Player life: ${state.player.life}</div>
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
