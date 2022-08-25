/**
 * Component to render level editor scene if active
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../state/reducers/index.js').State} state
 * @returns {HTMLElement}
 */
export function levelEditorSceneComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true));

  if (state.activeScene !== 'level-editor-scene') {
    element.innerHTML = '';
  } else {
    const modes = [
      { label: 'Death', value: 'death' },
      { label: 'Life',  value: 'life'  }
    ];
    const { maxEnemies, mode, pathway, place, towers } = state.levelDraft;
		const canShowCanvasOptions =
			mode !== null &&
			maxEnemies !== null &&
			towers.length < maxEnemies;

		const canSave =
			   mode !== null
		  && maxEnemies !== null
		  && towers.length.toString() === maxEnemies
		  && pathway.length > 2;

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
        <input id="maxEnemies" type="number" min="1" step="1" value="${maxEnemies}" />
      </div>
			${!canShowCanvasOptions ? '' : `
        <div>
			    <fieldset>
			  	  <legend>
			  		  What should be placed by clicking on the field?
			  		</legend>
			  		<input
			  		  id="place-pathway"
			  			type="radio"
			  			name="place"
			  			value="pathway"
			  			${place === 'pathway' ? 'checked="checked"' : ''}
			  		/>
			  	  <label for="place-pathway">
			  		  Pathway point
			  		</label>
			  		<input
			  		  id="place-tower"
			  			type="radio"
			  			name="place"
			  			value="tower"
			  			${place === 'tower' ? 'checked="checked"' : ''}
			  		/>
			  	  <label for="place-tower">
			  			Tower
			  		</label>
			  	</fieldset>
			  </div>
			`}
      ${mode === null ? '' : `
				<div>
          <section data-component="canvas"></section>
        </div>
      `}
      <nav class="actions">
			  ${canSave
				  ? `<button type="button" data-action="save-draft">Save</button>`
					: ''}
        <button type="button" data-navigate="title-scene">Back to title</button>
      </nav>
    `;
  }

  return element;
}
