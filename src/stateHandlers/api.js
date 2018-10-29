
const url = 'http://localhost:8080';


// --- Pets ---
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
export function savePetApi(pet) {
  return fetch(url+'/pets', {
    method: 'PUT',
    body: JSON.stringify(pet),
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'no-cors'
  })
    .then(response =>response.json())
    .catch(error => {return error});
}


// --- Vets ---
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
export function createNewVetApi(vet) {
  return fetch(url+'/vets', {
    method: 'POST',
    body: JSON.stringify(vet),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response =>response.json())
    .catch(error => {return error});
}
export function saveVetApi(vet) {
  console.log('api saveVetApi vet:',vet);
  return fetch(url+'/vets', {
    method: 'PUT',
    body: JSON.stringify(vet),
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response =>response.json())
    .catch(error => {return error});
}


// --- Appointments ---
export function getAllApptsApi() {
  return fetch(url+'/appointments', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response =>response.json())
    .catch(error => {return error});
}
