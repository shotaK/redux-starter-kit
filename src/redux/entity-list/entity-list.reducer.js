import Immutable from 'immutable';

import { ENTITIES } from './entity-list.actions';
import { REQUEST, SUCCESS, FAILURE } from '../common/actions-utils';

const initialState = Immutable.Map({
  isFetching: false,
  entities: [],
  errorMessage: ''
});

const entity = (state = initialState, action) => {
  switch (action.type) {
    case ENTITIES + REQUEST :
      return state.set('isFetching', true);
    case ENTITIES + SUCCESS:
      return state.withMutations(s =>
        s.set('isFetching', false)
          .set('entities', Immutable.fromJS(action.entities))
      );
    case ENTITIES + FAILURE:
      return state.withMutations(s =>
        s.set('isFetching', false)
          .set('errorMessage', action.errorMessage)
      );
    default:
      return state
  }
};

export default entity;