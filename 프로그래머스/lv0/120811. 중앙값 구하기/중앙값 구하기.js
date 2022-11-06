function solution(array) {
    let half = (array.length * 0.5)-1;
    array.sort((a,b)=>a-b);
    return array[Math.ceil(half)];
}

/*
function solution(array) {
    return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}
*/