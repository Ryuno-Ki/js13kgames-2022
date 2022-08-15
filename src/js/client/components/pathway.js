import { mapCoordinatesToPath, pickLevel } from './helper.js';

export function pathwayComponent (targetElement, state) {
  const element = targetElement.cloneNode(true);
  const stroke = element.dataset.stroke;

  const { pathway } = pickLevel(state);
  const path = mapCoordinatesToPath(pathway);

  element.innerHTML = `
    <path d="${path}" stroke="${stroke}" strokeWidth="6" fill="none" />
  `;

  return element;
}
