import { State } from '../types';

// NOTE 只支持 path.length === 2 和 value
export const setValueDeep = (state: State, path: any, value: any, format?: Boolean) => {
  let obj = state;
  let i;
  for (i = 0; i < path.length - 1; i += 1) {
    if (obj[path[i]] === undefined) {
      obj[path[i]] = {};
    }
    obj = obj[path[i]];
  }
  if (format) {
    obj[path[i]] = value(obj[path[i]]);
  } else {
    obj[path[i]] = value;
  }
  return null;
};