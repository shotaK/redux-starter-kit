export const GET_ENTITIES_STARTED = 'GET_ENTITIES_STARTED';
export const GET_ENTITIES_SUCCEEDED = 'GET_ENTITIES_SUCCEEDED';
export const GET_ENTITIES_FAILED = 'GET_ENTITIES_FAILED';

export const requestEntities = () => ({
  type: GET_ENTITIES_STARTED
});

export const receiveEntities = (json) => ({
  type: GET_ENTITIES_SUCCEEDED,
  entities: json,
});

export const fetchEntities = () => dispatch => {
  dispatch(requestEntities());
  return fetch(`../data-entity-list.json`)
    .then(response => response.json())
    .then(json => dispatch(receiveEntities(json)))
};