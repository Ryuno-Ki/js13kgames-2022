import { mapCoordinatesToPath } from './helper.js';

export function pathwayComponent (targetElement, state) {
  const element = targetElement.cloneNode(true);
  const stroke = element.dataset.stroke;

  const level = state.levels[ state.activeLevel ];
  const { pathway } = level;
  const path = mapCoordinatesToPath(pathway);

  element.innerHTML = `
    <path d="${path}" stroke="${stroke}" strokeWidth="6" fill="none" />
  `;

  return element;
}
