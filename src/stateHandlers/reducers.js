
import {ACK_ERR_SAVING_APPT, ERR_SAVING_APPT, RECVD_APPTS, RECVD_PETS, RECVD_VETS} from './actionTypes'


const initialState = {
  pets: [],
  vets: [],
  appts: [],
  errSavingApptMsg: '',
};

const convertDateTime = (sqlDateTime) => {
  // sample jsDateTime: "2018-10-28T08:00"
  // sample sqlDateTime: "2018-10-28 00:00:00"
  try {
    // console.log('reducers convertDateTime sqlDateTime:',sqlDateTime);
    const dateAndTime = sqlDateTime.split(' ');
    const date = dateAndTime[0];
    const yrMthDay = date.split('-');
    const day = yrMthDay[0];
    const mth = yrMthDay[1];
    const year = yrMthDay[2];

    const time = dateAndTime[1];
    const hrMnSec = time.split(':');
    const hour = hrMnSec[0];
    const min = hrMnSec[1];

    const jsDateTime = year+'-'+mth+'-'+day+'T'+hour+':'+min;
    // console.log('reducers convertDateTime jsDateTime:',jsDateTime);
    return jsDateTime;
  } catch(e) {
    return sqlDateTime;
  }
};

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

    case ERR_SAVING_APPT:
      return Object.assign({}, state, {
        errSavingApptMsg: action.errSavingApptMsg,
      });

    case ACK_ERR_SAVING_APPT:
      return Object.assign({}, state, {
        errSavingApptMsg: '',
      });

    case RECVD_APPTS:
      let appts = action.appts;
      let appt;
      // console.log('before action.appts:',action.appts);
      for(appt of appts) {
        appt.startTime = convertDateTime(appt.startTime);
        appt.endTime = convertDateTime(appt.endTime);
      }
      // console.log('after action.appts:',action.appts);
      return Object.assign({}, state, {
        appts: appts,
      });

    default:
      return state
  }
}

export default petClinicReducer;
