function missingNumber(array: number[]): number[] {
  let missing = [];

  for (let i = 1; i < array.length; i++) {
    if (array.indexOf(i) < 0) {
      missing.push(i);
    }
  }
  return missing;
}

console.log(
  missingNumber([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41,
    42, 43, 44, 45, 46, 47, 48, 49, 50,
  ])
);

// [38]
