var flat = function (arr, n) {
    for (let i = 0; i < n; i++)
        for (let j = arr.length - 1; j >= 0; j--)
            if (Array.isArray(arr[j]))
                arr.splice(j, 1, ...arr[j])
    return arr
};
