export function canvasComponent (targetElement) {
  const element = targetElement.cloneNode(true);
  const height = 320;
  const width = 320;

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
      <g
        id="level"
        data-component="level"
        data-height="${height}"
        data-width="${width}"
      >
      </g>
    </svg>
  `;

  return element;
}
