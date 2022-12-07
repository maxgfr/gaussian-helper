export function getMean(array: Array<number>) {
  let tot = 0;
  for (let i = 0; i < array.length; i++) {
    tot += array[i];
  }
  return (1 / array.length) * tot;
}
