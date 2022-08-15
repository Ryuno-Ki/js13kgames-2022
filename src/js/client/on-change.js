import { chooseParty } from './state/actions/choose-party.js';
import { setNickname } from './state/actions/set-nickname.js';
import store from './state/store.js';

export function onChange (event) {
	const { target } = event;

  if (target && target.id) {
    switch (target.id) {
      case 'nickname':
        return store.dispatch(setNickname(target.value));
      case 'party':
        return store.dispatch(chooseParty(target.value));
      default:
        // Do nothing
    }
  }
}
