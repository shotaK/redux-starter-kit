import {combineReducers} from 'redux';
import entities from '../entity-list/entity-list.reducer';

const rootReducer = combineReducers({
  entities
});

export default rootReducer