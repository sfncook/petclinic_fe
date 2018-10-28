
import { RECVD_PETS, RECVD_VETS } from './actionTypes'


const initialState = {
  pets: [],
  vets: [],
}

function petClinicReducer(state = initialState, action) {
  switch (action.type) {
    case RECVD_PETS:
      return Object.assign({}, state, {
        pets: action.pets,
      });

    case RECVD_VETS:
      return Object.assign({}, state, {
        vets: action.vets,
      });

    default:
      return state
  }
}

export default petClinicReducer;
