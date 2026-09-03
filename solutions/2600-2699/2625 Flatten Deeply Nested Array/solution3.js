var flat = function (arr, n) {
    var flatten = (arr, n) => {
        if (n == 0)
            return arr

        let flat_arr = []
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i]
            if (Array.isArray(item))
                flat_arr.push(...flatten(item, n - 1))
            else
                flat_arr.push(item)
        }

        return flat_arr
    }

    return flatten(arr, n)
};
