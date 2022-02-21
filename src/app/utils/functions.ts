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
