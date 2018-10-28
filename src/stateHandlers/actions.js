import { FETCHING_PETS, RECVD_PETS } from './actionTypes'
import {getAllPetsApi} from './api'

export function fetchingPets() {
  return {
    type: FETCHING_PETS
  }
}

export function receivedPets(petsJson) {
  return {
    type: RECVD_PETS,
    pets: petsJson,
  }
}

export function getAllPets() {
  return dispatch => {
    dispatch(fetchingPets())
    return getAllPetsApi()
      .then(petsJson => dispatch(receivedPets(petsJson)))
  }
}
