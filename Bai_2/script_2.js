function deleteNumberFromArray(arr, index) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== index) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let array_2 = [1, 2, 2, 1, 5, 8, -3, 5, 0, 7];
let idx = 3;
console.log(deleteNumberFromArray(array_2, idx))