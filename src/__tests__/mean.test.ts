import { getMean } from '../mean';

describe('getMean', () => {
  it('should get mean', () => {
    expect(getMean([10, 2, 3, 4, 5])).toBe(4.800000000000001);
  });
});
