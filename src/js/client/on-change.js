// @ts-nocheck
import { chooseLevel } from './state/actions/choose-level.js'; import { chooseParty } from './state/actions/choose-party.js';
import { setDraftLevelMaxEnemies } from './state/actions/set-draft-level-max-enemies.js';
import { setDraftLevelMode } from './state/actions/set-draft-level-mode.js';
import { setMotionPreference } from './state/actions/set-motion-preference.js';
import { setPlacementMode } from './state/actions/set-placement-mode.js';
import { setNickname } from './state/actions/set-nickname.js';
import store from './state/store.js';

/**
 * Event handler for change events
 *
 * @argument {Event} event
 */
export function onChange (event) {
	const { target } = event;

  if (target && target.id) {
    switch (target.id) {
      case 'activeLevel':
        return store.dispatch(chooseLevel(target.value));
      case 'mastodon-instance':
        return store.dispatch(setMastodonInstance(target.value));
      case 'maxEnemies':
        return store.dispatch(setDraftLevelMaxEnemies(target.value));
      case 'mode':
        return store.dispatch(setDraftLevelMode(target.value));
      case 'nickname':
        return store.dispatch(setNickname(target.value));
      case 'party':
        return store.dispatch(chooseParty(target.value));
			case 'place-pathway':
				return store.dispatch(setPlacementMode('pathway'));
			case 'place-tower':
				return store.dispatch(setPlacementMode('tower'));
      case 'prefers-reduced-motion-no':
        return store.dispatch(setMotionPreference(false));
      case 'prefers-reduced-motion-yes':
        return store.dispatch(setMotionPreference(true));
      default:
        // Do nothing
    }
  }
}
