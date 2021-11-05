function checkArrForNonNumbers(arr) {
  let state = true;
  arr.map((x) => {
    if (typeof x !== 'number') {
      state = false;
    }
  });
  return state;
}
export default function analyze(arr) {
  const state = checkArrForNonNumbers(arr);
  if (state === false) {
    return 'error';
  }
  const len = arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const totalSum = arr.reduce((prev, curr) => (prev += curr), 0);
  const avg = Math.floor(totalSum / len);
  return {
    avg,
    min,
    max,
    len,
  };
}
