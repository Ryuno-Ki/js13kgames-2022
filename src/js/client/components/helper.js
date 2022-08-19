export function pickLevel (state) {
  if (state.activeLevel === null) {
    return state.levelDraft;
  }

  return state.levels[ state.activeLevel ];
}

export function mapCoordinatesToPath (coordinates) {
  if (coordinates.length === 0) {
    return '';
  }

  return [
      `M${coordinates[0].join(',')}`,
      coordinates.slice(1).map((segment) => `L${segment.join(',')}`).join(''),
    ].join('');
}

// Kudos: https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection#circle_collision
export function detectCircleCollision () {
  /*
   * circle2.bind("EnterFrame", () => {
    const dx = circle1.x - circle2.x;
    const dy = circle1.y - circle2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < circle1.radius + circle2.radius) {
        // collision detected!
        this.color = "green";
    } else {
        // no collision
        this.color = "blue";
    }
});
*/
}
