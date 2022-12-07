import { getMedian } from '../median';

describe('getMedian', () => {
  it('should get median', () => {
    expect(getMedian([1, 2, 3, 4, 5])).toBe(3);
  });
});
