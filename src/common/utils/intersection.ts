import { intersection as lodashIntersection } from 'lodash';

export const intersection = <T>(
  firstArray: Array<T>,
  secondArray: Array<T>,
): T[] => {
  return lodashIntersection(firstArray, secondArray);
};
