export function formComponent (targetElement, state) {
  const element = targetElement.cloneNode(true);
  const level = state.levels[ state.activeLevel ];
  const enemies = state.enemies[ level.mode ];
  const maxEnemies = level.maxEnemies;

  element.innerHTML = `
    <h2>Level ${state.activeLevel + 1}</h2>
    ${level.enemies.length >= maxEnemies ? '' : `
      <div class="actions">
        ${enemies.map((enemy) => {
          return `<button type="button" data-add-enemy="${enemy}">${enemy}</button>`
        }).join('')}
      </div>
    `}

    ${level.enemies.length === 0 ? '' : `
      <p>Current choices: ${level.enemies.join(', ')}</p>
    `}
  `;

  return element;
}
