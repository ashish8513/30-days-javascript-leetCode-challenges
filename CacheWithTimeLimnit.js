// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.


TimeLimitedCache.prototype.set = function (key, value, duration) {
    let result = false
    if (this.cache.hasOwnProperty(key)) {
        result = true

        clearTimeout(this.cache[key].timer)
    }
    let ref = this
    let timeoutId = setTimemout(() => {
        delete ref.cache[key]
    }, duration)
    this.cache[key] = { val: value, timer: timeoutId }
    return result
}

TimeLimitedCache.prototype.get = function (key) {
    if (!this.cache.hasOwnProperty(key)) {
        return -1
    }
    return this.cache[key].val
}
TimeLimitedCache.prototype.count = function () {
    return Object.keys(this.cache).length
}