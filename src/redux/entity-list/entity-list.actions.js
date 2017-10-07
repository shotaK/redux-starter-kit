import { makeActionCreator, REQUEST, SUCCESS, FAILURE, makeAsyncRequest } from '../common/actions-utils';
import { ENTITY_LIST_URL } from '../common/api-urls';

export const ENTITIES = 'ENTITIES';

export const fetchEntities = () => makeAsyncRequest(
  ENTITY_LIST_URL,
  'get',
  makeActionCreator(ENTITIES + REQUEST),
  makeActionCreator(ENTITIES + SUCCESS, 'entities'),
  makeActionCreator(ENTITIES + FAILURE, 'errorMessage')
);