
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) return []
    let res = [], rev = false
    for (let i of matrix) { res.push(...(rev ? i.reverse() : i)); rev = !rev; }
    return res;
}
