function solution(array) {
    let arr = [];
    let empty = [...array].sort((a,b) => b-a);
    arr.push(empty[0]);
    arr.push(array.indexOf(empty[0]));
    return arr
}