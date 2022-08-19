export function updatePositions (state) {
  const levels = state.levels.map(function (level) {

    if (level.begin !== null) {
      const { pathway } = level;

      return {
        ...level,
        enemies: level.enemies.map(function (enemy) {
          return {
            ...enemy,
            position: computeNewPosition({ enemy, pathway }),
          };
        }),
      };
    }

    return level;
  });

  return Object.assign({}, state, { levels });
}

function computeNewPosition ({ enemy, pathway }) {
	const { begin, speed } = enemy;
  const now = new Date() - 0;
  const sinceBegin = now - begin;

  // TODO: The math feels too complicated. Get some pen and paper
  // Dur in seconds, sinceBegin is in milliseconds
  const dur = speed * 1000;
  // First divide to seconds, then to get a percentage
  const t = clamp(
    sinceBegin / (dur + begin),
    sinceBegin,
    sinceBegin + dur
  ) / 1000 / speed;

  const [ start, end ] = getLineSegment(pathway);
  const [ x0, y0 ] = start;
  const [ x1, y1 ] = end;

  const x = clamp((1 - t) * x0 + t * x1, x0, x1);
  const y = clamp((1 - t) * y0 + t * y1, y0, y1);

  return [ x, y ];
}

function clamp (current, lower, upper) {
  if (current < lower) {
    return lower;
  }

  if (current > upper) {
    return upper;
  }

  return current;
}

// TODO: Line segment depends on elapsed time and enemy.speed
function getLineSegment (pathway) {
  const [ start, end ] = pathway;
  const x0 = parseFloat(start[0]);
  const y0 = parseFloat(start[1]);
  const x1 = parseFloat(end[0]);
  const y1 = parseFloat(end[1]);

  return [
    [ x0, y0 ],
    [ x1, y1 ],
  ];
}
