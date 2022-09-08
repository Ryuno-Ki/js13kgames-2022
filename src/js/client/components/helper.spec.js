import { expect } from 'chai';

import { detectCircleCollision } from './helper.js';

describe('detectCircleCollision', () => {
  describe('when circles are close', () => {
    it('should find a collision', () => {
      // Arrange
      const circle1 = {
        x: 97,
        y: 50,
        radius: 2,
      };
      const circle2 = {
        x: 100,
        y: 50,
        radius: 2,
      };

      // Act
      const haveCollided = detectCircleCollision(circle1, circle2);

      // Assert
      expect(haveCollided).to.be.true;
    });
  });

  describe('when circles are apart', () => {
    it('should not find a collision', () => {
      // Arrange
      const circle1 = {
        x: 0,
        y: 50,
        radius: 2,
      };
      const circle2 = {
        x: 100,
        y: 50,
        radius: 2,
      };

      // Act
      const haveCollided = detectCircleCollision(circle1, circle2);

      // Assert
      expect(haveCollided).to.be.false;
    });
  });
});
