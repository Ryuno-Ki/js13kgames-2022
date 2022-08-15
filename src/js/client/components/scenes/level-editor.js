export function levelEditorSceneComponent (targetElement, state) {
  const element = targetElement.cloneNode(true);

  if (state.activeScene !== 'level-editor-scene') {
    element.innerHTML = '';
  } else {
    const modes = [
      { label: 'Death', value: 'death' },
      { label: 'Life',  value: 'life'  }
    ];

    element.innerHTML = `
      <h2>Level Editor</h2>
      <div>
        <label for="mode">
          Which mode does the level have?
        </label>
        <select id="mode">
          <option value="">Choose one</option>
          ${modes.map((mode) => {
            return `<option value="${mode.value}">${mode.label}</option>`;
          }).join('')}
        </select>
      </div>
      <div>
        <label for="maxEnemies">
          How many enemies can be sent at maximum?
        </label>
        <input id="maxEnemies" type="number" min="1" step="1" value="5" />
      </div>
      <div>
        TODO: Click for pathway and towers
        <section data-component="canvas"></section>
      </div>
      <nav class="actions">
        <button type="button" data-navigate="title-scene">Back to title</button>
      </nav>
    `;
  }

  return element;
}
