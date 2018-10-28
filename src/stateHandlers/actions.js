import { FETCHING_PETS, RECVD_PETS, FETCHING_VETS, RECVD_VETS } from './actionTypes'
import { getAllPetsApi, getAllVetsApi } from './api'

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


export function fetchingVets() {
  return {
    type: FETCHING_VETS
  }
}

export function receivedVets(vetsJson) {
  return {
    type: RECVD_VETS,
    vets: vetsJson,
  }
}

export function getAllVets() {
  return dispatch => {
    dispatch(fetchingVets())
    return getAllVetsApi()
      .then(vetsJson => dispatch(receivedVets(vetsJson)))
  }
}
