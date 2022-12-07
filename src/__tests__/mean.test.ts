import { getMean } from '../mean';

describe('getMean', () => {
  it('should get mean', () => {
    expect(getMean([1, 2, 3, 4, 5])).toBe(2.5);
  });
});
