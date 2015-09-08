import FluxStore from 'stores/Store';
import AppDispatcher from '../dispatcher/HealthAppDispatcher';
import {ActionTypes} from 'constants/HealthConstants';

let appState;

class AppStore extends FluxStore {

  constructor() {
    super();
    appState = [];
  }

  getState() {
    return appState;
  }
}

let appStoreInstance = new AppStore();

appStoreInstance.dispatchToken = AppDispatcher.register(action => {
  switch (action.type) {
    case ActionTypes.CREATE_RECORD:
      appState.push(action.record);
      break;

    case ActionTypes.ELIMINATE_RECORD:
      let index = appState.indexOf(action.record);
      if (index > -1) {
        appState.splice(index, 1);
      }
      break;

    default:
      return;
  }

  appStoreInstance.emitChange();
});

export default appStoreInstance;
