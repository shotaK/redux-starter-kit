import {
  GET_ENTITIES_STARTED, GET_ENTITIES_SUCCEEDED,
  GET_ENTITIES_FAILED
} from './entity-list.actions';

const entities = (state = {isFetching: false, entities: []}, action) => {
  switch (action.type) {
    case GET_ENTITIES_STARTED:
      return {
        ...state,
        isFetching: true,
      };
    case GET_ENTITIES_SUCCEEDED:
      return {
        ...state,
        isFetching: false,
        entities: action.entities,
      };
    case GET_ENTITIES_FAILED:
      return {
        ...state,
        isFetching: false,
        // failureReason: action.entities,
      };
    default:
      return state
  }
};

export default entities;