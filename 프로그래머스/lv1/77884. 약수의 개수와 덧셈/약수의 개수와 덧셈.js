// 1. left부터 right 까지 숫자가 담긴 배열(arr)을 생성
// 2. arr의 요소를 순회 하면서 각 요소의 약수를 구하기
// 3. 약수의 갯수가 짝수인지 홀수 인지 판별
// 4. 짝수라면 해당 요소를 + , 홀수라면 해당 요소를- 하여 연산하기

function solution(left, right) {
    let arr = [];
    for(let i=left; i<=right; i++) {
        arr.push(i);
        console.log(arr)
    }
    
}