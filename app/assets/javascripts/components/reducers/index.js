import { combineReducers } from 'redux';
import Mydetails from './my_details';

const rootReducer = combineReducers({
  details: Mydetails
});

export default rootReducer;