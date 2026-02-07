import { validateNumberArray } from './validation';

/**
 * Calculates the arithmetic mean (average) of an array of numbers.
 *
 * The mean is calculated as the sum of all values divided by the count of values.
 *
 * @param array - Array of numbers to calculate the mean for
 * @returns The arithmetic mean of the array
 * @throws {Error} If the array is empty
 * @throws {TypeError} If the array contains non-finite numbers (NaN or Infinity)
 *
 * @example
 * ```typescript
 * getMean([1, 2, 3, 4, 5]); // Returns 3
 * getMean([10, 20, 30]); // Returns 20
 * getMean([-5, 0, 5]); // Returns 0
 * ```
 */
export function getMean(array: Array<number>): number {
  validateNumberArray(array, 'mean');
  const sum = array.reduce((accumulator, value) => accumulator + value, 0);
  return sum / array.length;
}
