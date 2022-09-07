import chai from 'chai';
import chaiDom from 'chai-dom';
import { JSDOM } from 'jsdom';

import { initialState } from '../data/initial-state.js';
import { pathwayComponent } from './pathway.js';

chai.use(chaiDom);

const { expect } = chai;

function prepareDocument () {
  const jsdom = new JSDOM('');
  return jsdom.window.document;
}

describe('pathwayComponent', () => {
  it('should render a component', () => {
    // Arrange
    const document = prepareDocument();
    const targetElement = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    const activeLevel = 1;
    const levels = initialState.levels.map((level) => {
      return {
        ...level,
        pathway: [],
      };
    });
    const state = /** @type {import('../data/initial-state.js').State} */(Object.assign({}, initialState, { activeLevel, levels }));

    // Act
    const component = pathwayComponent(targetElement, state);

    // Assert
    expect(component).to.have.tagName('g');
  });

  describe('with no line segments', () => {
    it('should render an empty path', () => {
      // Arrange
      const document = prepareDocument();
      const targetElement = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      const activeLevel = 1;
      const levels = initialState.levels.map((level) => {
        return {
          ...level,
          pathway: [],
        };
      });
      const state = /** @type {import('../data/initial-state.js').State} */(Object.assign({}, initialState, { activeLevel, levels }));

      // Act
      const component = pathwayComponent(targetElement, state);

      // Assert
      expect(component).to.have.descendant('path');
      expect(component.querySelector('path')).to.have.attribute('d', '');
    });
  });

  describe('with line segments', () => {
    it('should render a path', () => {
      // Arrange
      const document = prepareDocument();
      const targetElement = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      const activeLevel = 1;
      const state = /** @type {import('../data/initial-state.js').State} */(Object.assign({}, initialState, { activeLevel }));

      // Act
      const component = pathwayComponent(targetElement, state);

      // Assert
      expect(component).to.have.descendant('path');
      expect(component.querySelector('path')).to.have.attribute('d');
      expect(component.querySelector('path')).not.to.have.attribute('d', '');
      expect(component).to.have.descendants('text').and.have.length(2);
    });

    describe('when in life mode', () => {
      it('should render a starting icon', () => {
        // Arrange
        const document = prepareDocument();
        const targetElement = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        const activeLevel = 0;
        const state = /** @type {import('../data/initial-state.js').State} */(Object.assign({}, initialState, { activeLevel }));

        // Act
        const component = pathwayComponent(targetElement, state);

        // Assert
        expect(state.levels[ activeLevel ].mode).to.equal('life');
        expect(component).to.have.descendant('text');
        expect(component.querySelector('text')).to.have.text('🛐');
      });

      it('should render a ending icon', () => {
        // Arrange
        const document = prepareDocument();
        const targetElement = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        const activeLevel = 0;
        const state = /** @type {import('../data/initial-state.js').State} */(Object.assign({}, initialState, { activeLevel }));

        // Act
        const component = pathwayComponent(targetElement, state);
        const texts = component.querySelectorAll('text');

        // Assert
        expect(state.levels[ activeLevel ].mode).to.equal('life');
        expect(component).to.have.descendant('text');
        expect(texts[ texts.length - 1]).to.have.text('🪦');
      });
    });

    describe('when in death mode', () => {
      it('should render a starting icon', () => {
        // Arrange
        const document = prepareDocument();
        const targetElement = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        const activeLevel = 1;
        const state = /** @type {import('../data/initial-state.js').State} */(Object.assign({}, initialState, { activeLevel }));

        // Act
        const component = pathwayComponent(targetElement, state);

        // Assert
        expect(state.levels[ activeLevel ].mode).to.equal('death');
        expect(component).to.have.descendant('text');
        expect(component.querySelector('text')).to.have.text('🪦');
      });

      it('should render a ending icon', () => {
        // Arrange
        const document = prepareDocument();
        const targetElement = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        const activeLevel = 1;
        const state = /** @type {import('../data/initial-state.js').State} */(Object.assign({}, initialState, { activeLevel }));

        // Act
        const component = pathwayComponent(targetElement, state);
        const texts = component.querySelectorAll('text');

        // Assert
        expect(state.levels[ activeLevel ].mode).to.equal('death');
        expect(component).to.have.descendant('text');
        expect(texts[ texts.length - 1]).to.have.text('🛐');
      });
    });
  });
});
