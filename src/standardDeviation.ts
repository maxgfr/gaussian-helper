import { getMean } from './mean';
import { validateNumberArray } from './validation';

/**
 * Options for standard deviation calculation
 */
export interface StandardDeviationOptions {
  /**
   * If true, calculates sample standard deviation (divides by n-1) using Bessel's correction.
   * If false, calculates population standard deviation (divides by n).
   *
   * Use `sample: true` when your data represents a sample from a larger population.
   * Use `sample: false` (default) when your data represents the entire population.
   *
   * @default false
   */
  sample?: boolean;
}

/**
 * Calculates the standard deviation of an array of numbers.
 *
 * Standard deviation measures the amount of variation or dispersion in a dataset.
 * A low standard deviation indicates values are close to the mean, while a high
 * standard deviation indicates values are spread out over a wider range.
 *
 * By default, calculates **population standard deviation** (divides by n).
 * Set `options.sample = true` to calculate **sample standard deviation** (divides by n-1).
 *
 * @param values - Array of numbers to calculate standard deviation for
 * @param options - Configuration options
 * @returns The standard deviation
 * @throws {Error} If the array is empty
 * @throws {Error} If sample=true and array has fewer than 2 values
 * @throws {TypeError} If the array contains non-finite numbers (NaN or Infinity)
 *
 * @example
 * ```typescript
 * // Population standard deviation (default)
 * getStandardDeviation([1, 2, 3, 4, 5]); // Returns ~1.414
 *
 * // Sample standard deviation
 * getStandardDeviation([1, 2, 3, 4, 5], { sample: true }); // Returns ~1.581
 *
 * // All values identical = zero deviation
 * getStandardDeviation([5, 5, 5, 5]); // Returns 0
 * ```
 */
export const getStandardDeviation = (
  values: Array<number>,
  options: StandardDeviationOptions = {}
): number => {
  validateNumberArray(values, 'standard deviation');

  const { sample = false } = options;

  // Sample standard deviation requires at least 2 values
  if (sample && values.length < 2) {
    throw new Error(
      'Sample standard deviation requires at least 2 values (cannot divide by n-1 when n=1)'
    );
  }

  const mean = getMean(values);
  const squaredDifferences = values.map((value) => Math.pow(value - mean, 2));
  const divisor = sample ? values.length - 1 : values.length;
  const variance = squaredDifferences.reduce((sum, val) => sum + val, 0) / divisor;
  return Math.sqrt(variance);
};
