
import {GET_ALL_PETS, RECVD_PETS} from './actionTypes'


const initialState = {
  pets: [],
  vets: [],
}

function petClinicReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PETS:
      return Object.assign({}, state, {
        pets: [{'foo1':'bar1'}, {'foo2':'bar2'}],
      });
    case RECVD_PETS:
      return Object.assign({}, state, {
        pets: action.pets,
      });
    default:
      return state
  }
}

export default petClinicReducer;
