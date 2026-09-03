var flat = function (arr, n) {
    for (let i = 0; i < n; i++) {
        curr_arr = []
        arr.forEach((item, index) => {
            if (Array.isArray(item))
                curr_arr.push(...item)
            else
                curr_arr.push(item)
        })
        arr = curr_arr
    }
    return arr
};
