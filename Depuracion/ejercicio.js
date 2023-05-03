function secuenciaFibonacci(num) {
    let fibList = [];

    if (num === 1) {
        fibList.push(1);
    } else if (num > 1) {
        fibList = [1, 1];

        for (let i = 2; i < num; i++) {
            let nextFib = fibList[i - 1] + fibList[i - 2];
            fibList.push(nextFib);
        }
    }

    return fibList;
}

console.log(secuenciaFibonacci(6));