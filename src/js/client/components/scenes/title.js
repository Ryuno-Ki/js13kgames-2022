export function titleSceneComponent (targetElement, state) {
  const element = targetElement.cloneNode(true);

  if (state.activeScene !== 'title-scene') {
    element.innerHTML = '';
  } else {
    element.innerHTML = `
      <h1><span>Life</span> <span>Death</span> <span>Tower</span> <span>Defense</span></h1>
      <nav class="actions">
        <button type="button" data-navigate="new-game-scene">New Game</button>
        <button type="button" data-navigate="level-editor-scene">Level Editor</button>
        <button type="button" data-navigate="settings-scene">Settings</button>
        <button type="button" data-navigate="about-scene">About</button>
      </nav>
    `;
  }

  return element;
}
