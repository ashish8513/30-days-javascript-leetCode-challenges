function createCounter(n) {
    let count = n;
    return function () {
        return count++;
    }
}

const counter = createCounter(10);
const result = [
    counter(),
    counter(),
    counter()
]
console.log(result)