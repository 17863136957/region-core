/* eslint-disable no-param-reassign */

function assignValue(state, key, value) {
  return Object.assign({}, state, { [key]: value });
}

const isPathInvalid = (path) => {
  if (!path) {
    return true;
  }
  return Array.isArray(path) && path.length === 0;
};

/**
 * assignValueDeep
 * @param {Object} state
 * @param {Array|string} path
 * @param {*} value - value assign to path
 * @returns {Object} - state
 */
export function assignValueDeep(state = {}, path, value) {
  if (isPathInvalid(path)) {
    console.warn('empty path invalid');
    return Object.assign({}, state, value);
  }
  if (!Array.isArray(path)) {
    return assignValue(state, path, value);
  }
  if (path.length === 1) {
    if (typeof value === 'function') {
      value = value(state[path[0]]);
    }
    return assignValue(state, path[0], value);
  }
  const pathCopied = path.slice();
  const key = pathCopied.shift();
  const formatObj = {
    [key]: assignValueDeep(state[key], pathCopied, value)
  };
  return Object.assign({}, state, formatObj);
}

/**
 * setValueDeep
 * @param {Object} state
 * @param {Array|string} path
 * @param {*} value - value assign to path
 * @returns null
 */
export function setValueDeep(state = {}, path, value) {
  if (isPathInvalid(path)) {
    console.warn('empty path invalid');
    Object.assign(state, value);
    return null;
  }
  if (!Array.isArray(path)) {
    state[path] = value;
    return null;
  }
  if (path.length === 1) {
    if (typeof value === 'function') {
      value = value(state[path]);
    }
    state[path] = value;
    return null;
  }

  let obj = state;
  let i;
  for (i = 0; i < path.length - 1; i++) {
    if (obj[path[i]] === undefined) {
      obj[path[i]] = {};
    }
    obj = obj[path[i]];
  }
  if (typeof value === 'function') {
    value = value(obj[path[i]]);
  }
  obj[path[i]] = value;
  return null;
}
