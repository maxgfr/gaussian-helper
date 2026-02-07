import { validateNumberArray } from './validation';

/**
 * Calculates the median (middle value) of an array of numbers.
 *
 * The median is the middle value in a sorted list. For arrays with an odd length,
 * it returns the middle element. For arrays with an even length, it returns the
 * average of the two middle elements.
 *
 * This function does not mutate the original array.
 *
 * @param values - Array of numbers to calculate the median for
 * @returns The median value
 * @throws {Error} If the array is empty
 * @throws {TypeError} If the array contains non-finite numbers (NaN or Infinity)
 *
 * @example
 * ```typescript
 * getMedian([1, 2, 3, 4, 5]); // Returns 3 (middle value)
 * getMedian([1, 2, 3, 4]); // Returns 2.5 (average of 2 and 3)
 * getMedian([5, 1, 3]); // Returns 3 (sorted: [1, 3, 5])
 * ```
 */
export function getMedian(values: Array<number>): number {
  validateNumberArray(values, 'median');
  const sorted = [...values].sort((a, b) => a - b);
  const half = Math.floor(sorted.length / 2);
  if (sorted.length % 2) {
    return sorted[half];
  }
  // Use (a + b) / 2 = a + (b - a) / 2 to prevent overflow with very large numbers
  return sorted[half - 1] + (sorted[half] - sorted[half - 1]) / 2;
}
