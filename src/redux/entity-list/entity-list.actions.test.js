import * as actions from './entity-list.actions';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {

  afterEach(() => {
    nock.cleanAll()
  });

  it('should create an action to add a todo', () => {

    const json = {
      "type": "firewall",
      "name": 432462,
      "owner": "jtuck",
      "timeStarted": "4/18/2014 12:12am",
      "state": "running",
      "criteria": {
        "metrics": "running",
        "build": ""
      }
    };

    const expectedAction = {
      type: actions.GET_ENTITIES_SUCCEEDED,
      entities: json,
    };
    expect(actions.receiveEntities(json)).toEqual(expectedAction)
  });

  it('should create an action to add a todo', () => {
    nock('../')
      .get('/data-entity-list.json')
      .reply(200, { body: { todos: ['do something'] } });

    const expectedActions = [
      { type: types.FETCH_TODOS_REQUEST },
      { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['do something'] } }
    ];
    const store = mockStore({ todos: [] });

  })

});












