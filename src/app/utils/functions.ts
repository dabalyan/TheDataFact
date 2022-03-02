export const isSimpleObject = item => {
  return !!item && item.constructor === Object;
}

/**
 * Deep merge simple objects (excluding Array, Date, etc.)
 */
export const mergeDeep = (target, ...sources) => {
  if (!sources.length) return target;
  const source = sources.shift();

  if (!isSimpleObject(target) || !isSimpleObject(source)) {
    return;
  }

  for (const key in source) {
    if (!isSimpleObject(source[key])) {
      target[key] = source[key] ?? target[key]; // replace with source
      continue;
    }
    if (!isSimpleObject(target[key])) {
      target[key] = {}; // create object in target
    }
    mergeDeep(target[key], source[key]); // clone and merge
  }

  return mergeDeep(target, ...sources);
}

export const sortCompareFn = (desc = false) => {
  const m = desc ? -1 : 1;
  return (a, b) => {
    return a > b ? 1 * m : a < b ? -1 * m : 0;
  };
};

export const sortCompareFnByKey = (key?: string, desc = false) => {
  const m = desc ? -1 : 1;
  return (objectA, objectB) => {
    const a = objectA[key];
    const b = objectB[key];
    return a > b ? 1 * m : a < b ? -1 * m : 0;
  };
};

export const sortByIndexAndLengthCompareFn = (keyName: string, matchValue) => {
  return (objectA, objectB) => {
    const valueA = objectA[keyName];
    const valueB = objectB[keyName];
    const a = valueA.indexOf(matchValue);
    const b = valueB.indexOf(matchValue);
    return a > b ? 1 : a < b ? -1 : valueA.length > valueB.length ? 1 : valueA.length < valueB.length ? -1 : 0;
  }
}
