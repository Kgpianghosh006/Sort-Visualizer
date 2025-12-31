export function insertionSort(array) {
  const animations = [];
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    // Comparison
    animations.push(['compare', i, j]);
    animations.push(['uncompare', i, j]);
    
    while (j >= 0 && array[j] > key) {
      animations.push(['compare', j, j + 1]);
      animations.push(['overwrite', j + 1, array[j]]);
      animations.push(['uncompare', j, j + 1]);
      array[j + 1] = array[j];
      j = j - 1;
    }
    animations.push(['overwrite', j + 1, key]);
    array[j + 1] = key;
  }
  return animations;
}