/*
 * The reducer takes care of our data
 * Using actions, we can change our application state
 * To add a new action, add it to the switch statement in the homeReducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return assign({}, state, {
 *       stateVariable: action.var
 *   });
 *
 * To add a new reducer, add a file like this to the reducers folder, and
 * add it in the rootReducer.js.
 */

import { READY_IMPORT_DIARIES, CANCEL_IMPORT_DIARIES } from '../constants/AppConstants';
import assignToEmpty from '../utils/assign';

const initialState = {
  showPopup: false,
  grids: []
};

function gridsReducer(state = initialState, action) {
  Object.freeze(state); // Don't mutate state directly, always use assign()!
  switch (action.type) {
    case READY_IMPORT_DIARIES:
      return assignToEmpty(state, {
        showPopup: true
        //showInfo: !state.showInfo
      });
    case CANCEL_IMPORT_DIARIES:
      return assignToEmpty(state, {
        //showInfo: false
        showPopup: false
      });
    default:
      return state;
  }
}

export default gridsReducer;