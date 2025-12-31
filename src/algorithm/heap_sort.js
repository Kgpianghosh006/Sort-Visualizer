export function heapSort(array) {
  const animations = [];
  let n = array.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i, animations);
  }
  for (let i = n - 1; i > 0; i--) {
    animations.push(["swap", 0, array[i], i, array[0]]);
    [array[0], array[i]] = [array[i], array[0]];
    heapify(array, i, 0, animations);
  }
  return animations;
}

function heapify(array, n, i, animations) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  if (left < n) {
    animations.push(["compare", left, largest]);
    animations.push(["uncompare", left, largest]);
    if (array[left] > array[largest]) largest = left;
  }
  if (right < n) {
    animations.push(["compare", right, largest]);
    animations.push(["uncompare", right, largest]);
    if (array[right] > array[largest]) largest = right;
  }
  if (largest !== i) {
    animations.push(["swap", i, array[largest], largest, array[i]]);
    [array[i], array[largest]] = [array[largest], array[i]];
    heapify(array, n, largest, animations);
  }
}