import { ActivatedRoute, Router } from '@angular/router';

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
      target[key] = source[key]; // replace with source
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

export const getCurrentRoute = (router: Router): ActivatedRoute => {
  let route = router.routerState.root;
  while (route.firstChild) {
    route = route.firstChild;
  }
  return route;
}

export const isNumber = (n: any): n is number => typeof n === 'number' && isFinite(n);

export const scaleNumber = (n: number, newMin: number, newMax: number, oldMin: number = 0, oldMax: number = 100) => {
  const sign = Math.sign(n) || 1;
  n = Math.abs(n);
  const fractionOfOldRange = (n - oldMin) / (oldMax - oldMin);
  const scaledN = fractionOfOldRange * (newMax - newMin) + newMin;
  return sign * scaledN;
};

export const rgbColor = (r: number = 0, g: number = 0, b: number = 0, a: number = 1) => `rgba(${[r, g, b, a].join(', ')})`;

export const shadeColor = (color: string, percent: number) => {

  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = parseInt(R * (100 + percent) / 100 as any);
  G = parseInt(G * (100 + percent) / 100 as any);
  B = parseInt(B * (100 + percent) / 100 as any);

  R = (R < 255) ? R : 255;
  G = (G < 255) ? G : 255;
  B = (B < 255) ? B : 255;

  const RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
  const GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
  const BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

  return "#" + RR + GG + BB;
}
