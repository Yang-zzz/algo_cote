function solution(array, n) {
    let count = 0;
    array.forEach(value => {
        if(value === n) count += 1;
    });
    return count;
};