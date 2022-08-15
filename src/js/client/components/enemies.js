import { mapCoordinatesToPath } from './helper.js';

export function enemiesComponent (targetElement, state) {
  const element = targetElement.cloneNode(true);
  const level = state.levels[ state.activeLevel ];
  const { enemies, pathway } = level;
  const path = mapCoordinatesToPath(pathway);

  element.innerHTML = `
    ${enemies.map((enemy) => {
      return `<text>
        <textPath path="${path}">
          ${enemy}
          <animate attributeName="startOffset" from="-100%" to="200%" begin="0s" dur="5s" repeatCount="1" />
        </textPath>
      </text>
    `
    }).join('')}
  `;

  return element;
}
