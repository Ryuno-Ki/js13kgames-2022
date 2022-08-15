export function pickLevel (state) {
  if (state.activeLevel === null) {
    return null;
  }

  return state.levels[ state.activeLevel ];
}

export function mapCoordinatesToPath (coordinates) {
  return [
      `M${coordinates[0].join(',')}`,
      coordinates.slice(1).map((segment) => `L${segment.join(',')}`).join(''),
    ].join('');
}
