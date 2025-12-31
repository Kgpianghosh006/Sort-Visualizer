export const selectionSort = (array) => {
    const animations = [];
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            animations.push(["compare", minIdx, j]);
            animations.push(["uncompare", minIdx, j]);

            if (array[j] < array[minIdx]) {
                minIdx = j;
            }
        }

        if (minIdx !== i) {
            animations.push(["swap", i, array[minIdx], minIdx, array[i]]);
        
            let temp = array[i];
            array[i] = array[minIdx];
            array[minIdx] = temp;
        }
    }
    return animations;
};