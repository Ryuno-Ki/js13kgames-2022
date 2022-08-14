export function newGameSceneComponent (targetElement, state) {
	const element = targetElement.cloneNode(true);

  if (state.activeScene !== 'new-game-scene') {
    element.innerHTML = '';
  } else {
    const level = state.levels[ state.activeLevel ];
    const { enemies, mode, pathway, towers } = level;

    const height = 320;
    const width = 320;

    const fill = mode === 'death' ? 'black' : 'white';
    const stroke = mode === 'death' ? 'white' : 'black';
    const path = mapCoordinatesToPath(pathway);

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

        <g id="level">
          <rect x="0" y="0" height="${height}" width="${width}" fill="${fill}" />
          <g id="pathway">
            <path d="${path}" stroke="${stroke}" strokeWidth="6" fill="none" />
          </g>
          <g id="enemies">
            <text>
              <textPath path="${path}">
                  ${enemies}
                <animate attributeName="startOffset" from="-100%" to="200%" begin="0s" dur="5s" repeatCount="1" />
              </textPath>
            </text>
          </g>
          <g id="towers">
            ${towers.map((tower) => {
              return `<circle cx="${tower.position[0]}" cy="${tower.position[1]}" r="2" fill="${stroke}" />`;
            }).join('')}
          </g>
        </g>
      </svg>
    `;
  }

	return element;
}

function mapCoordinatesToPath (coordinates) {
  return [
      `M${coordinates[0].join(',')}`,
      coordinates.slice(1).map((segment) => `L${segment.join(',')}`).join(''),
    ].join('');
}
