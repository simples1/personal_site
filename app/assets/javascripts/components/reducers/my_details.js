import { SET_DETAILS } from '../actions/myTypes';

export default function(state = 0, action) {
  switch (action.type) {
  case SET_DETAILS:
    return action.details;
  default:
    return state;
  }
}
