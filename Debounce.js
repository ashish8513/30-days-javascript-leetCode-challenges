var debounce = function (fn, t) {
    let timerId = undefined
    return function (...args) {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            fn(...args);
        }, t)
    }
}