let array = [1, 2, 3, 4, 5]
function add(list) {
    let arr = list.filter(x => (x % 2) === 0);
    return arr;
}

console.log(add(array));