import {combineReducers} from 'redux';
import entity from '../entity-list/entity-list.reducer';

const rootReducer = combineReducers({
  entity
});

export default rootReducer