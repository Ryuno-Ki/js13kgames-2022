export function newGameSceneComponent (targetElement, state) {
  const element = targetElement.cloneNode(true);

  if (state.activeScene !== 'new-game-scene') {
    element.innerHTML = '';
  } else {
    element.innerHTML = `
      <h2>New game</h2>
      <nav class="actions">
        <button type="button" data-navigate="level-scene">Start game</button>
      </nav>
    `;
  }

  return element;
}
