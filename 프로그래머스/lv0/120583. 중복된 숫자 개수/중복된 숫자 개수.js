function solution(array, n) {
    let count = 0;
    array.forEach(value => {
        if(value === n) count += 1;
    });
    return count;
};

// //1번 풀이
// function solution(array, n) {
//     let count = 0;
//     array.forEach(value => {
//         if(value === n) count += 1;
//     });
//     return count;
// };

// //2번 풀이
// function solution(array, n) {
//     let count = 0;
//     array.forEach(x => (x === n) ? count+=1 : count+=0);
//     return count;
// };
