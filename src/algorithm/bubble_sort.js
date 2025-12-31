export function bubbleSort(array) {
    const animations = [];
    const tempArray = [...array];
    const n = tempArray.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            animations.push(["compare", j, j + 1]);
            animations.push(["uncompare", j, j + 1]);

            if (tempArray[j] > tempArray[j + 1]) {
                animations.push(["swap", j, tempArray[j + 1], j + 1, tempArray[j]]);
                let temp = tempArray[j];
                tempArray[j] = tempArray[j + 1];
                tempArray[j + 1] = temp;
            }
        }
    }
    return animations;
}