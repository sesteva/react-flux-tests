import AppDispatcher from '../dispatcher/HealthAppDispatcher';
import {ActionTypes} from 'constants/HealthConstants';

let HealthActionCreator = {
  createRecord(record) {
    AppDispatcher.dispatch({
      type: ActionTypes.CREATE_RECORD,
      record: record
    });
  },
  eliminateRecord(record) {
    AppDispatcher.dispatch({
      type: ActionTypes.ELIMINATE_RECORD,
      record: record
    });
  }
};

export default HealthActionCreator;
