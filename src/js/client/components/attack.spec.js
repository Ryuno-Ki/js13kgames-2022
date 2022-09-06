import chai from 'chai';
import chaiDom from 'chai-dom';
import { JSDOM } from 'jsdom';

import { initialState } from '../data/initial-state.js';
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
		const state = Object.assign({}, initialState, { activeLevel: 1 });

	  // Act
	  const component = attackComponent(targetElement, state);

	  // Assert
	  expect(component).to.have.tagName('div');
	});
});
