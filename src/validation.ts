/**
 * Validates that an array contains only finite numbers (no NaN or Infinity)
 * @param array - Array to validate
 * @param functionName - Name of the calling function (for error messages)
 * @throws {Error} If array is empty
 * @throws {TypeError} If array contains non-finite numbers
 */
export function validateNumberArray(array: Array<number>, functionName: string): void {
  if (array.length === 0) {
    throw new Error(`Cannot calculate ${functionName} of an empty array`);
  }

  if (!array.every((value) => Number.isFinite(value))) {
    throw new TypeError(`Array contains non-finite numbers (NaN or Infinity)`);
  }
}
