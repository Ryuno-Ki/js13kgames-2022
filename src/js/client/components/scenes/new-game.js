export function newGameSceneComponent (targetElement, state) {
  const element = targetElement.cloneNode(true);
  if (state.activeScene !== 'new-game-scene') {
    element.innerHTML = '';
  } else {
    const { nickname, party } = state.player;
    const levels = state.levels.map((level, index) => {
      return {
        label: `Level ${index + 1} (${level.mode})`,
        value: index,
      };
    });

    element.innerHTML = `
      <h2>New game</h2>
      <div>
        <label for="nickname">
          How do you want to be called?
        </label>
        <input id="nickname" type="text" />
      </div>
      <div>
        <label for="party">
          Which party do you want to defend?
        </label>
        <select id="party">
          <option value="">Choose wisely</option>
          <option value="life">Life</option>
          <option value="death">Death</option>
        </select>
      </div>
      <div>
        <label for="activelevel">
          Which level do you want to play?
        </label>
        <select id="activeLevel">
          <option value="">Please choose</option>
          ${levels.map((level) => {
            return `<option value="${level.value}">${level.label}</option>`;
          }).join('')}
        </select>
      </div>
      <nav class="actions">
        ${nickname && party ? `
          <button type="button" data-navigate="level-scene">Start game</button>
        ` : ''}
        <button type="button" data-navigate="title-scene">Back to title</button>
      </nav>
    `;
  }

  return element;
}
