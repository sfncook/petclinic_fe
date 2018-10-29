import {FETCHING_PETS, RECVD_PETS, FETCHING_VETS, RECVD_VETS, FETCHING_APPTS, RECVD_APPTS} from './actionTypes'
import { getAllPetsApi, getAllVetsApi, getAllApptsApi, createNewPetApi, savePetApi, createNewVetApi, saveVetApi } from './api'


// --- Pets ---
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
export function createNewPet(pet) {
  return dispatch => {
    dispatch(fetchingPets())
    return createNewPetApi(pet)
      .then(()=> {
        return getAllPetsApi()
          .then(petsJson => dispatch(receivedPets(petsJson)))
      })
  }
}
export function savePet(pet) {
  return dispatch => {
    dispatch(fetchingPets())
    return savePetApi(pet)
      .then(()=> {
        return getAllPetsApi()
          .then(petsJson => dispatch(receivedPets(petsJson)))
      })
  }
}


// --- Vets ---
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
export function createNewVet(vet) {
  return dispatch => {
    dispatch(fetchingVets())
    return createNewVetApi(vet)
      .then(()=> {
        return getAllVetsApi()
          .then(vetsJson => dispatch(receivedVets(vetsJson)))
      })
  }
}
export function saveVet(vet) {
  return dispatch => {
    dispatch(fetchingVets())
    return saveVetApi(vet)
      .then(()=> {
        return getAllVetsApi()
          .then(vetsJson => dispatch(receivedVets(vetsJson)))
      })
  }
}



// --- Appointments ---
export function fetchingAppts() {
  return {
    type: FETCHING_APPTS
  }
}
export function receivedAppts(apptsJson) {
  return {
    type: RECVD_APPTS,
    appts: apptsJson,
  }
}
export function getAllAppts() {
  return dispatch => {
    dispatch(fetchingAppts())
    return getAllApptsApi()
      .then(apptsJson => dispatch(receivedAppts(apptsJson)))
  }
}
