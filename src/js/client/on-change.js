import { chooseLevel } from './state/actions/choose-level.js';
import { chooseParty } from './state/actions/choose-party.js';
import { setDraftLevelMaxEnemies } from './state/actions/set-draft-level-max-enemies.js';
import { setDraftLevelMode } from './state/actions/set-draft-level-mode.js';
import { setNickname } from './state/actions/set-nickname.js';
import store from './state/store.js';

export function onChange (event) {
	const { target } = event;

  if (target && target.id) {
    switch (target.id) {
      case 'activeLevel':
        return store.dispatch(chooseLevel(target.value));
      case 'maxEnemies':
        return store.dispatch(setDraftLevelMaxEnemies(target.value));
      case 'mode':
        return store.dispatch(setDraftLevelMode(target.value));
      case 'nickname':
        return store.dispatch(setNickname(target.value));
      case 'party':
        return store.dispatch(chooseParty(target.value));
      default:
        // Do nothing
    }
  }
}
