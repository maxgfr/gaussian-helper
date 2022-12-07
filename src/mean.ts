export function getMean(array: Array<number>) {
  var tot = 0;
  for (var i = 0; i < array.length; i++) {
    tot += array[i];
  }
  return (1 / array.length) * tot;
}
