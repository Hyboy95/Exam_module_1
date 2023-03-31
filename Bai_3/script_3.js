function sumOfListFibonacci(x) {
    let a = 0;
    let b = 1;
    let c;
    let sum = 0;
    for (let i = 0; i <= x; i++) {
        sum += a;
        c = a + b;
        a = b;
        b = c;
    }
    return sum;
}


let num = 10;
console.log(sumOfListFibonacci(num))

