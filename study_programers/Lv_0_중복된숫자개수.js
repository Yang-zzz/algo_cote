//1번 풀이
function solution(array, n) {
    let count = 0;
    array.forEach(value => {
        if(value === n) count += 1;
    });
    return count;
};

//2번 풀이
function solution(array, n) {
    let count = 0;
    array.forEach(x => (x === n) ? count+=1 : count+=0);
    return count;
};


// 중복된 숫자 개수 : https://school.programmers.co.kr/learn/courses/30/lessons/120583