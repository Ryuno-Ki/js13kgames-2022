export function towersComponent (targetElement, state) {
  const element = targetElement.cloneNode(true);
  const stroke = targetElement.dataset.stroke;

  const level = state.levels[ state.activeLevel ];
  const { towers } = level;

  element.innerHTML = towers.map((tower) => {
      return `<circle cx="${tower.position[0]}" cy="${tower.position[1]}" r="2" fill="${stroke}" />`;
  }).join('');

  return element;
}
