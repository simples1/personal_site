import {SET_DETAILS, INCREMENT_COUNTER, DECREMENT_COUNTER} from './myTypes';

export function setDetails(details) {
  return {
    type: SET_DETAILS,
    details: details
  };
}


