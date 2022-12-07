import { getMean } from './mean';

export const getStandardDeviation = (values: Array<number>) => {
  const mean = getMean(values);
  return Math.sqrt(getMean(values.map((value) => Math.pow(value - mean, 2))));
};
