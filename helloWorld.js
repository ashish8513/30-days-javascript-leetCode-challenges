function createHellowWorld() {
    return function () {
        return "hello world";
    }
}
const helloWorld=createHellowWorld();
console.log(helloWorld())