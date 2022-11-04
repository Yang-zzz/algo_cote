function solution(array) {
    let half = (array.length * 0.5)-1;
    array.sort((a,b)=>a-b);
    return array[Math.ceil(half)];
}