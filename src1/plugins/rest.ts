import axios from 'axios';

const Constants = {
  UnlimitStr: '$limit=50'
};

function _logError (error) {
  if (error.response) {
    // console.log('[Error] response.data: ' + JSON.stringify(error.response.data, null, 4));
    // console.log('[Error] response.status: ' + error.response.status);
    // console.log('[Error] response.headers: ' + JSON.stringify(error.response.headers, null, 4));
  } else if (error.request) {
    // console.log('[Error] request: ' + JSON.stringify(error.request, null, 4));
  } else {
    // console.log('[Error] message: ' + JSON.stringify(error.message, null, 4));
  }
  // console.log('[Error] config: ' + JSON.stringify(error.config, null, 4));
}

function _handlerSessionInvalidError (error) {
  if (error.response && error.response.data && error.response.data.message && error.response.data.message.startsWith('session is invalid')) {
    // console.error('Your session is invalid or expired.');
    // window.$nuxt.$store.commit('profile/setProfile', {expiredAt: Math.round(Date.now() / 1000) - 2});
  }
}

function _mergeParamsAndAuthorization (params, authorization) {
  const headers = { authorization, 'policy-type': 1 };
  if (authorization == null) {
    return params || {};
  }

  if (params == null) {
    return {headers};
  }

  if (typeof params.headers !== 'object') {
    return Object.assign(params, {headers});
  }

  const newHeaders = Object.assign({ 'policy-type': 1 }, params.headers, { authorization });
  return Object.assign(params, { headers: newHeaders });
}

function _handlerPromise (promise, params) {
  return promise.then(res => {
    if (res.data != null && res.data.sessionResult != null) {
      if (window == null) {
        // console.error('Why window is null?');
      } else {
        // window.$nuxt.$store.dispatch('profile/updateSessionExpireTimer', res.data.sessionResult);
      }
    }

    return Promise.resolve(res);
  }).catch(err => {
    _logError(err);
    _handlerSessionInvalidError(err);

    return Promise.reject(err);
  });
}

function appendHeadersForLogger (params) {
  let r = Math.random();
  let requestId = Date.now() + '-web-' + Math.round(r * 10000000);

  if ((params.headers || {})['timelog-sequence-type'] != null && r < (process.env.profilerRate || 0.0)) {
    params.headers = Object.assign(params.headers, { 'timelog-sequence-uuid': requestId, 'request-id': requestId });
  } else {
    params.headers = Object.assign(params.headers, { 'request-id': requestId });
  }
}

function get (path, params, authorization) {
  let newParams = _mergeParamsAndAuthorization(params, authorization);
  appendHeadersForLogger(newParams);
  let promise = axios.get(path, newParams);
  return _handlerPromise(promise, newParams);
}

function post (path, data, params, authorization) {
  let newParams = _mergeParamsAndAuthorization(params, authorization);
  appendHeadersForLogger(newParams);
  let promise = axios.post(path, data, newParams);
  return _handlerPromise(promise, newParams);
}

function put (path, data, params, authorization) {
  let newParams = _mergeParamsAndAuthorization(params, authorization);
  appendHeadersForLogger(newParams);
  let promise = axios.put(path, data, newParams);
  return _handlerPromise(promise, newParams);
}

function patch (path, data, params, authorization) {
  let newParams = _mergeParamsAndAuthorization(params, authorization);
  appendHeadersForLogger(newParams);
  let promise = axios.patch(path, data, newParams);
  return _handlerPromise(promise, newParams);
}

function delete_ (path, params, authorization) {
  let newParams = _mergeParamsAndAuthorization(params, authorization);
  appendHeadersForLogger(newParams);
  let promise = axios.delete(path, newParams);
  return _handlerPromise(promise, newParams);
}

function ownResourceParams (ownResource) {
  let headers = {};
  if (ownResource === true) {
    headers = { headers: { 'policy-type': 1 } };
  }
  return headers;
}

function ownResourceParamsWithRoomId (ownResource, roomId) {
  const headers= ownResourceParams(ownResource);
  headers['$roomId'] = roomId;
  return {headers};
}

export default { ...Constants, get, post, put, patch, delete: delete_, ownResourceParams, ownResourceParamsWithRoomId };
