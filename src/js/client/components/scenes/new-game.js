/**
 * Component to render new game scene if active
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../data/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function newGameSceneComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true));

  if (state.activeScene !== 'new-game-scene') {
    element.innerHTML = '';
  } else {
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
        <label for="party" aria-describedby="party-explained">
          Which party do you want to join?
        </label>
        <select id="party">
          <option value="">Choose wisely</option>
          <option value="life">Life</option>
          <option value="death">Death</option>
        </select>
        <p id="party-explained">
          Depending on your choice, you will either join the attack or the
          defence forces. What happens depends also on the level.
        </p>
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
        ${!isReadyForPlay(state) ? '' : `
          <button type="button" data-navigate="level-scene">Start game</button>}
        `}
        <button type="button" data-navigate="title-scene">Back to title</button>
      </nav>
    `;
  }

  return element;
}

/**
 * Helper function to check whether all pre-conditions are met to start playing
 *
 * @private
 * @argument {import('../../data/initial-state.js').State} state
 * @returns {boolean}
 */
function isReadyForPlay (state) {
  const { activeLevel } = state;
  const { nickname, party } = state.player;

  if (!nickname) {
    return false;
  }

  if (!party) {
    return false;
  }

  if (activeLevel === null) {
    return false;
  }

  // TODO: I believe, this check was to handle the default option in the level select
  // @ts-ignore
  if (activeLevel === '') {
    return false;
  }

  return true;
}
