export function levelComponent (targetElement, state) {
  const element = targetElement.cloneNode(true);
  const { mode } = state.levels[ state.activeLevel ];

  const height = element.dataset.height;
  const width = element.dataset.width;

  const fill = mode === 'death' ? 'black' : 'white';
  const stroke = mode === 'death' ? 'white' : 'black';

  element.innerHTML = `
    <rect x="0" y="0" height="${height}" width="${width}" fill="${fill}" />
    <g id="pathway" data-component="pathway" data-stroke="${stroke}"></g>
    <g id="enemies" data-component="enemies"></g>
    <g id="towers" data-component="towers" data-stroke="${stroke}"></g>
  `;

  return element;
}
