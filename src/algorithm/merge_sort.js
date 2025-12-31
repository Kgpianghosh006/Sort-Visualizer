export const MergeSort = (array) => {
    const animations = [];
    if (array.length <= 1) return animations;
  
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
};
  
const mergeSortHelper = (mainArray, startIdx, endIdx, auxiliaryArray, animations) => {
    if (startIdx === endIdx) return;
  
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    // Note: We swap main and auxiliary here to maintain the merge logic
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
};
  
const doMerge = (mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) => {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
  
    while (i <= middleIdx && j <= endIdx) {
        // Comparison animation
        animations.push(["compare", i, j]);
        animations.push(["uncompare", i, j]);
  
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            // Overwrite animation: index k gets value from auxiliaryArray[i]
            animations.push(["overwrite", k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animations.push(["overwrite", k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
  
    while (i <= middleIdx) {
        animations.push(["compare", i, i]);
        animations.push(["uncompare", i, i]);
        animations.push(["overwrite", k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
  
    while (j <= endIdx) {
        animations.push(["compare", j, j]);
        animations.push(["uncompare", j, j]);
        animations.push(["overwrite", k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
};