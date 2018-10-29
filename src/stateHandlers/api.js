
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

const convertDateTime = (jsDateTime) => {
  // sample jsDateTime: "2018-10-28T08:00"
  // sample sqlDateTime: "dd-MM-yyyy hh:mm:ss"
  try {
    // console.log('api.convertDateTime jsDateTime:',jsDateTime);
    const dateAndTime = jsDateTime.split('T');
    const date = dateAndTime[0];
    const yrMthDay = date.split('-');
    const year = yrMthDay[0];
    const mth = yrMthDay[1];
    const day = yrMthDay[2];

    const time = dateAndTime[1];
    const hrMnSec = time.split(':');
    const hour = hrMnSec[0];
    const min = hrMnSec[1];

    const sqlDateTime = day+'-'+mth+'-'+year+' '+hour+':'+min+":00";
    // console.log('api.datetime sqlDateTime:',sqlDateTime);
    return sqlDateTime;
  } catch(e) {
    return jsDateTime;
  }
};

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
export function createNewApptApi(appt) {
  appt.startTime = convertDateTime(appt.startTime);
  appt.endTime = convertDateTime(appt.endTime);
  return fetch(url+'/appointments', {
    method: 'POST',
    body: JSON.stringify(appt),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response =>{
      if(response.status===200) {
        return response.json();
      } else {
        return Promise.reject("Was not able to save appointment.");
      }
    })
    .catch(error => {throw error;});
}
export function saveApptApi(appt) {
  appt.startTime = convertDateTime(appt.startTime);
  appt.endTime = convertDateTime(appt.endTime);
  return fetch(url+'/appointments', {
    method: 'PUT',
    body: JSON.stringify(appt),
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response =>{
      if(response.status===200) {
        return response.json();
      } else {
        return Promise.reject("Was not able to save appointment.");
      }
    })
    .catch(error => {throw error;});
}
export function deleteApptApi(appt) {
  return fetch(url+'/appointments', {
    method: 'DELETE',
    body: JSON.stringify(appt),
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response =>response.json())
    .catch(error => {return error});
}
