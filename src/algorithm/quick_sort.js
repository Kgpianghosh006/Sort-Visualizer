export function quickSort(array) {
  const animations = [];
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function quickSortHelper(mainArray, startIdx, endIdx, animations) {
  if (startIdx >= endIdx) return;
  let pivotIdx = partition(mainArray, startIdx, endIdx, animations);
  quickSortHelper(mainArray, startIdx, pivotIdx - 1, animations);
  quickSortHelper(mainArray, pivotIdx + 1, endIdx, animations);
}

function partition(mainArray, startIdx, endIdx, animations) {
  let pivotValue = mainArray[endIdx];
  let pivotIdx = startIdx;
  for (let i = startIdx; i < endIdx; i++) {
    animations.push(["compare", i, endIdx]);
    animations.push(["uncompare", i, endIdx]);
    if (mainArray[i] <= pivotValue) {
      animations.push(["swap", i, mainArray[pivotIdx], pivotIdx, mainArray[i]]);
      [mainArray[i], mainArray[pivotIdx]] = [mainArray[pivotIdx], mainArray[i]];
      pivotIdx++;
    }
  }
  animations.push(["swap", pivotIdx, mainArray[endIdx], endIdx, mainArray[pivotIdx]]);
  [mainArray[pivotIdx], mainArray[endIdx]] = [mainArray[endIdx], mainArray[pivotIdx]];
  return pivotIdx;
}