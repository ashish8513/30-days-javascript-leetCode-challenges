// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return await new Promise(res => {
        setTimeout(()=>{res()}, millis)
    });
}
 
sleep(100).then(result => console.log(result));
