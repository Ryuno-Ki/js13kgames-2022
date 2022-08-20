import chai from 'chai';
import chaiDom from 'chai-dom';
import { JSDOM } from 'jsdom';

import { attackComponent } from './attack.js';

chai.use(chaiDom);

const { expect } = chai;

function prepareDocument () {
	const jsdom = new JSDOM('');
	return jsdom.window.document;
}

describe('attackComponent', () => {
	it('should render a component', () => {
	  // Arrange
	  const document = prepareDocument();
	  const targetElement = document.createElement('div');
		const state = {
			activeLevel: null,
			activeScene: /** @type {import('./wrapper.js').Scene} */('level-scene'),
			entities: {
				death: [],
				life: [],
			},
			levelDraft: {
				begin: null,
				enemies: [],
				height: 0,
				maxEnemies: 0,
				mode: 'life',
				pathway: [],
				towers: [],
				width: 0,
			},
			levels: [],
			player: {
				nickname: null,
				party: null,
			},
			settings: {
				prefersReducedMotion: false,
			},
		};

	  // Act
	  const component = attackComponent(targetElement, state);

	  // Assert
	  expect(component).to.have.tagName('div');
	});
});
