import chai from 'chai';
import chaiDom from 'chai-dom';
import { JSDOM } from 'jsdom';

import { initialState } from '../data/initial-state.js';
import { canvasComponent } from './canvas.js';

chai.use(chaiDom);

const { expect } = chai;

function prepareDocument () {
  const jsdom = new JSDOM('');
  return jsdom.window.document;
}

describe('canvasComponent', () => {
  it('should render a component', () => {
    // Arrange
    const document = prepareDocument();
    const targetElement = document.createElement('div');
    const state = /** @type {import('../data/initial-state.js').State} */(Object.assign({}, initialState, { activeLevel: 1 }));

    // Act
    const component = canvasComponent(targetElement, state);

    // Assert
    expect(component).to.have.tagName('div');
  });

  it('should show the life points', () => {
    // Arrange
    const document = prepareDocument();
    const targetElement = document.createElement('div');
    const state = /** @type {import('../data/initial-state.js').State} */(Object.assign({}, initialState, { activeLevel: 1 }));

    // Act
    const component = canvasComponent(targetElement, state);

    // Assert
    expect(component).to.have.descendant('div');
  });
  
  it('should show the canvas', () => {
    // Arrange
    const document = prepareDocument();
    const targetElement = document.createElement('div');
    const state = /** @type {import('../data/initial-state.js').State} */(Object.assign({}, initialState, { activeLevel: 1 }));

    // Act
    const component = canvasComponent(targetElement, state);

    // Assert
    expect(component).to.have.descendant('svg');
  })
});
