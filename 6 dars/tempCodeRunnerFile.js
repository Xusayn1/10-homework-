function func(arr) {
  return function(m) {
    let closest = arr[0];
    let minDiff = Math.abs(arr[0] - m);

    for (let i = 1; i < arr.length; i++) {
      const diff = Math.abs(arr[i] - m);
      if (diff < minDiff) {
        minDiff = diff;
        closest = arr[i];
      }
    }

    return closest;
  };
}
console.log(func([16, 8, 2, 1, 5, 9, 3])(6));     
console.log(func([1, 12, 32, 2, 10, 5, 4])(30));  