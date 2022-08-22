export const levels = [{
  begin: null,
  height: 320,
  width: 320,
  mode: /** @type {'death' | 'life'} */('life'),
  maxEnemies: 3,
  enemies: [],
  pathway: [
    [   0,  50 ],
    [  30,  50 ],
    [  30,  70 ],
    [  70,  70 ],
    [  70,  50 ],
    [ 100,  50 ]
  ],
  towers: [{
    icon: null,
    position: [  28,  44 ],
    radius: 2,
    type: null,
  }, {
    icon: null,
    position: [  36,  52 ],
    radius: 2,
    type: null,
  }],
}, {
  begin: null,
  height: 320,
  width: 320,
  mode: /** @type {'death' | 'life'} */('death'),
  maxEnemies: 5,
  enemies: [],
  pathway: [
    [   0,  50 ],
    [  30,  50 ],
    [  30,  70 ],
    [  70,  70 ],
    [  70,  50 ],
    [ 100,  50 ]
  ],
  towers: [{
    icon: null,
    position: [  30,  44 ],
    radius: 4,
  }, {
    icon: null,
    position: [  36,  50 ],
    radius: 4,
  }],
}];
