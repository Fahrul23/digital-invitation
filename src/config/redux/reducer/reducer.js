import { combineReducers } from "redux";
import globalReducer from './globalReducer';
import profileReducer from './profileReducer';

const reducer = combineReducers({globalReducer,profileReducer});

export default reducer;
