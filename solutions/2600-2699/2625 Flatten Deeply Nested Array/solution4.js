var flat = function (arr, n) {
    var flatten = (arr, n) => {
        if (n == 0)
            return arr

        for (let i = arr.length - 1; i >= 0; i--) {
            if (Array.isArray(arr[i])) {
                flatten(arr[i], n - 1)
                arr.splice(i, 1, ...arr[i])
            }
        }
    }

    flatten(arr, n)
    return arr
};
