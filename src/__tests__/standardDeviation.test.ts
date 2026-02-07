import { getStandardDeviation } from '../standardDeviation';

describe('getStandardDeviation', () => {
  it('should calculate standard deviation of consecutive numbers', () => {
    expect(getStandardDeviation([1, 2, 3, 4, 5])).toBeCloseTo(1.4142135623730951, 10);
  });

  it('should calculate standard deviation of identical numbers', () => {
    expect(getStandardDeviation([5, 5, 5, 5, 5])).toBe(0);
  });

  it('should calculate standard deviation of single element', () => {
    expect(getStandardDeviation([42])).toBe(0);
  });

  it('should calculate standard deviation of negative numbers', () => {
    const result = getStandardDeviation([-5, -10, -15]);
    expect(result).toBeCloseTo(4.082482904638631, 10);
  });

  it('should calculate standard deviation of mixed numbers', () => {
    const result = getStandardDeviation([10, -5, 0, 5, -10]);
    expect(result).toBeCloseTo(7.0710678118654755, 10);
  });

  it('should throw error for empty array', () => {
    expect(() => getStandardDeviation([])).toThrow('Cannot calculate standard deviation of an empty array');
  });

  it('should handle decimal numbers', () => {
    const result = getStandardDeviation([1.5, 2.5, 3.5, 4.5, 5.5]);
    expect(result).toBeCloseTo(1.4142135623730951, 10);
  });

  it('should handle large variance', () => {
    const result = getStandardDeviation([1, 100, 1000]);
    expect(result).toBeCloseTo(449.41962573968664, 10);
  });

  it('should throw TypeError for array containing NaN', () => {
    expect(() => getStandardDeviation([1, NaN, 3])).toThrow(TypeError);
    expect(() => getStandardDeviation([1, NaN, 3])).toThrow('non-finite numbers');
  });

  it('should throw TypeError for array containing Infinity', () => {
    expect(() => getStandardDeviation([1, Infinity, 3])).toThrow(TypeError);
  });

  describe('Population vs Sample standard deviation', () => {
    it('should calculate population std by default (divides by n)', () => {
      const result = getStandardDeviation([1, 2, 3, 4, 5]);
      expect(result).toBeCloseTo(1.4142135623730951, 10);
    });

    it('should calculate population std when sample=false', () => {
      const result = getStandardDeviation([1, 2, 3, 4, 5], { sample: false });
      expect(result).toBeCloseTo(1.4142135623730951, 10);
    });

    it('should calculate sample std when sample=true (divides by n-1)', () => {
      const result = getStandardDeviation([1, 2, 3, 4, 5], { sample: true });
      expect(result).toBeCloseTo(1.5811388300841898, 10);
    });

    it('should throw error for single value with sample=true', () => {
      expect(() => getStandardDeviation([42], { sample: true })).toThrow(
        'Sample standard deviation requires at least 2 values'
      );
    });

    it('should handle single value with sample=false', () => {
      expect(getStandardDeviation([42], { sample: false })).toBe(0);
    });

    it('should calculate sample std correctly for small dataset', () => {
      const result = getStandardDeviation([2, 4], { sample: true });
      // Mean = 3, variance = ((2-3)^2 + (4-3)^2) / (2-1) = (1 + 1) / 1 = 2
      // std = sqrt(2) ≈ 1.414
      expect(result).toBeCloseTo(1.4142135623730951, 10);
    });
  });
});
