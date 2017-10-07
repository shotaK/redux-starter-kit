// change production server url when publishing the app
export const API_URL = process.env.NODE_ENV === 'production' ? '' : '';

export const ENTITY_LIST_URL = '../data-entity-list.json';