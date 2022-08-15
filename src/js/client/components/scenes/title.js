export function titleSceneComponent (targetElement, state) {
  const element = targetElement.cloneNode(true);

  if (state.activeScene !== 'title-scene') {
    element.innerHTML = '';
  } else {
    element.innerHTML = `
      <h1>Life Death Tower Defense</h1>
      <nav class="actions">
        <button type="button" data-navigate="level-scene">New Game</button>
        <button type="button" data-navigate="settings-scene">Settings</button>
        <button type="button" data-navigate="about-scene">About</button>
      </nav>
    `;
  }

  return element;
}
