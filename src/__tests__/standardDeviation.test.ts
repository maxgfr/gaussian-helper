import { getStandardDeviation } from '../standardDeviation';

describe('getStandardDeviation', () => {
  it('should get standard deviation', () => {
    expect(getStandardDeviation([1, 2, 3, 4, 5])).toBe(1.4142135623730951);
  });
});
