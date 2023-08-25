function findPairs(x, array) {
    let counter = 0;
    let arrayFiltered = array.filter((item, index) => {
        return array.indexOf(item) === index;
    });
    for (let i = 0; i < arrayFiltered.length - 1; i++){
        for (let j = i+1; j < arrayFiltered.length; j++){
            if (arrayFiltered[i] + arrayFiltered[j] === x) {
                counter ++
            }
        }
    }
    console.log('X: ' + x)
    console.log('array: ' +array)
    console.log('Number of pairs: ' +counter +'\n');
}

findPairs(1, [3, 4, 5, 6]);
findPairs(15, [0, 15, 32, 2000, 15000]);
findPairs(42, [1, 1, 10, 32, 41]);
// Create 10 random numbers and array between 0 and 1
    for (let i = 0; i < 10; i++){
    findPairs(Math.floor(Math.random()*10), randomArray())
}

function randomArray() {
    let arrayR = []
    for (let i = 0; i < 10; i++) {
        arrayR.push(Math.floor(Math.random()*10))
    }
    return arrayR.sort();
}