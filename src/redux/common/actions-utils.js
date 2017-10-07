import get from 'lodash.get';
import axios from 'axios';

import { API_URL } from '../common/api-urls';

export const REQUEST = '_REQUEST';
export const FAILURE = '_FAILURE';
export const SUCCESS = '_SUCCESS';

export const makeActionCreator = (type, ...argNames) => {
  return (...args) => {
    let action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    });
    return action
  }
};

export function makeAsyncRequest(url, method, requestFn, successFn, failedFn) {
  return (dispatch) => {
    dispatch(requestFn());
    return axios[method](API_URL + url)
      .then(response => {
        if (response.status === 200) {
          dispatch(successFn(response.data));
        } else {
          dispatch(failedFn(response.error));
        }
      })
      .catch((error) => {
        return dispatch(failedFn(processErrorRes(error)));
      });
  }
}

export const processErrorRes = (error) => get(error, "response.data.error", "Request failed, please try refreshing the page");