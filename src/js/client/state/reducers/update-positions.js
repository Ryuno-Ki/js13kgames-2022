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
  const [ start, end, t ] = getLineSegment(enemy, pathway);
  const [ x0, y0 ] = start;
  const [ x1, y1 ] = end;

  const x = clamp((1 - t) * x0 + t * x1, x0, x1);
  const y = clamp((1 - t) * y0 + t * y1, y0, y1);

  return [ x, y ];
}

function getLineSegment (enemy, pathway) {
  const now = new Date() - 0;
  const progressInTime = getProgressInTime(now, enemy);
  const progressInSpace = getProgressInSpace(pathway);

  const i = clamp(
    getLineSegmentIndex(progressInTime, progressInSpace),
    0,
    pathway.length - 2
  );

  const startIndex = i;
  const endIndex = i + 1;
  const start = pathway[ startIndex ];
  const end = pathway[ endIndex ];

  const x0 = parseFloat(start[0]);
  const y0 = parseFloat(start[1]);
  const x1 = parseFloat(end[0]);
  const y1 = parseFloat(end[1]);

  return [
    [ x0, y0 ],
    [ x1, y1 ],
    progressInTime,
  ];
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

function getProgressInTime (now, enemy) {
  const { begin, speed } = enemy;
  const dur = speed * 1000; // in ms

  const t = clamp(now - begin, 0, dur);

  return t / dur;
}

function getProgressInSpace (pathway) {
  const progressInSpace = [];
  const totalPathwayLength = getTotalPathwayLength(pathway);
  let sum = 0;

  for (let i = 0; i < pathway.length - 1; i++) {
    const [ x, y ] = pathway[ i ];
    const lineSegmentLength = Math.sqrt(x * x + y * y);

    progressInSpace.push(sum + lineSegmentLength / totalPathwayLength);
    sum = progressInSpace[ progressInSpace.length - 1 ];
  }

  return [ 0 ].concat(progressInSpace);
}

function getTotalPathwayLength (pathway) {
  const lengths = pathway.map((point, index, arr) => {
    if (index === arr.length - 1) {
      return null;
    }

    const [ x, y ] = point;
    return Math.sqrt(x * x + y * y);
  }).filter(Boolean);

  return lengths.reduce((sum, len) => sum + len, 0);
}

function getLineSegmentIndex (time, space) {
  let index = 0;

  for (let i = space.length - 1; i >= 0; i--) {
    const treshold = space[ i ];

    if (time > treshold) {
      index = i;
      break;
    }
  }

  return index;
}
