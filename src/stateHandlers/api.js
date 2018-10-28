
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
