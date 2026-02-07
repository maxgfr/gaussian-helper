import { getMedian } from '../median';

describe('getMedian', () => {
  it('should calculate median of odd-length array', () => {
    expect(getMedian([10, 2, 3, 4, 5])).toBe(4);
  });

  it('should calculate median of even-length array', () => {
    expect(getMedian([1, 2, 3, 4])).toBe(2.5);
  });

  it('should calculate median of single element', () => {
    expect(getMedian([42])).toBe(42);
  });

  it('should calculate median of negative numbers', () => {
    expect(getMedian([-5, -10, -1, -20])).toBe(-7.5);
  });

  it('should calculate median of unsorted array', () => {
    expect(getMedian([5, 1, 9, 3, 7])).toBe(5);
  });

  it('should not mutate original array', () => {
    const original = [5, 2, 8, 1, 9];
    const copy = [...original];
    getMedian(original);
    expect(original).toEqual(copy);
  });

  it('should throw error for empty array', () => {
    expect(() => getMedian([])).toThrow('Cannot calculate median of an empty array');
  });

  it('should handle decimal numbers', () => {
    expect(getMedian([1.5, 2.5, 3.5, 4.5, 5.5])).toBe(3.5);
  });

  it('should throw TypeError for array containing NaN', () => {
    expect(() => getMedian([1, NaN, 3])).toThrow(TypeError);
    expect(() => getMedian([1, NaN, 3])).toThrow('non-finite numbers');
  });

  it('should throw TypeError for array containing Infinity', () => {
    expect(() => getMedian([1, Infinity, 3])).toThrow(TypeError);
  });

  it('should handle very large numbers without overflow', () => {
    // Number.MAX_VALUE is approximately 1.7976931348623157e+308
    const largeNum = Number.MAX_VALUE / 2;
    const result = getMedian([largeNum, largeNum]);
    expect(result).toBe(largeNum);
    expect(Number.isFinite(result)).toBe(true);
  });
});
