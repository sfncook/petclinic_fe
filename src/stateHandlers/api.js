
const url = 'http://localhost:8080';

export function getAllPetsApi() {
  return fetch(url+'/pets', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response =>response.json())
    .catch(error => {return error});
}
export function createNewPetApi(pet) {
  console.log('api createNewPetApi:', pet);

  return fetch(url+'/pets', {
    method: 'POST',
    body: JSON.stringify(pet),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response =>response.json())
    .catch(error => {return error});
}

export function getAllVetsApi() {
  return fetch(url+'/vets', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response =>response.json())
    .catch(error => {return error});
}

export function getAllAppsApi() {
  return fetch(url+'/appointments', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response =>response.json())
    .catch(error => {return error});
}
