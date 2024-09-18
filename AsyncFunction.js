var promiseAll = function (functions) {
    return new Promise((res, rej) => {
        const result = [];
        let count = functions.length

        for (let i = 0; i < count; i++) {
            functions[i]().then((response) => {
                result[i] = response
                count--
                if (count === 0) {
                    return res(result)
                }
            }).catch((e) => {
                rej(e)
            })
        }
    })
}