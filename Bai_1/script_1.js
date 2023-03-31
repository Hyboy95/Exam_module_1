function findSecondMax(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let temp = arr[j];
            if (temp < arr[j + 1]) {
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr[1];
}

let array_1 = [1, 2, 0, 10, 3, 1, 9, 8, 2, 7, 10, 5, 2, 8]
console.log(findSecondMax(array_1))