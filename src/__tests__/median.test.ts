import { getMedian } from '../median';

describe('getMedian', () => {
  it('should get median', () => {
    expect(getMedian([10, 2, 3, 4, 5])).toBe(4);
  });
});
