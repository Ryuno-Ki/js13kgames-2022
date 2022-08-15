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
