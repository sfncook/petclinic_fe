
import {FETCH_PETS} from './actionTypes'


const initialState = {
  pets: [],
  vets: [],
}

function petClinicReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PETS:
      return Object.assign({}, state, {
        pets: [{'foo1':'bar1'}, {'foo2':'bar2'}],
      });
    default:
      return state
  }
}

export default petClinicReducer;
