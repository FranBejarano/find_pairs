function findPairs(x, array) {
    let counter = 0;
    for (let i = 0; i < array.length - 1; i++){
        for (let j = i+1; j < array.length; j++){
            if (array[i] + array[j] === x) {
                counter ++
            }
        }
    }
    console.log(counter);
}

findPairs(1, [3, 4, 5, 6]);
findPairs(15, [0, 15, 32, 2000, 15000]);
findPairs(42, [1, 1, 10, 32, 41]);