import { getMean } from '../mean';

describe('getMean', () => {
  it('should calculate mean of positive numbers', () => {
    expect(getMean([10, 2, 3, 4, 5])).toBe(4.8);
  });

  it('should calculate mean of negative numbers', () => {
    expect(getMean([-5, -10, -15])).toBe(-10);
  });

  it('should calculate mean of mixed positive and negative numbers', () => {
    expect(getMean([10, -5, 0, 5, -10])).toBe(0);
  });

  it('should calculate mean of single element', () => {
    expect(getMean([42])).toBe(42);
  });

  it('should calculate mean of decimal numbers', () => {
    expect(getMean([1.5, 2.5, 3.5])).toBeCloseTo(2.5, 10);
  });

  it('should throw error for empty array', () => {
    expect(() => getMean([])).toThrow('Cannot calculate mean of an empty array');
  });

  it('should handle large arrays', () => {
    const largeArray = Array.from({ length: 10000 }, (_, i) => i + 1);
    expect(getMean(largeArray)).toBe(5000.5);
  });

  it('should throw TypeError for array containing NaN', () => {
    expect(() => getMean([1, NaN, 3])).toThrow(TypeError);
    expect(() => getMean([1, NaN, 3])).toThrow('non-finite numbers');
  });

  it('should throw TypeError for array containing Infinity', () => {
    expect(() => getMean([1, Infinity, 3])).toThrow(TypeError);
    expect(() => getMean([1, Infinity, 3])).toThrow('non-finite numbers');
  });

  it('should throw TypeError for array containing -Infinity', () => {
    expect(() => getMean([1, -Infinity, 3])).toThrow(TypeError);
  });
});
