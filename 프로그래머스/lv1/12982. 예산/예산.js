// d 배열을 순회하여 각 요소를 하나씩 뽑고, budget에서 요소의 숫자만큼 뺀다.
// budget의 수가 0미만 까지만 뺄 수 있도록 하고,
// 계산되지 않은 남은 요소의 갯수를 카운트하여 리턴한다.
function solution(d, budget) {
    let count = 0;
    d.sort((a,b) => a-b);
    for(let i=0; i<d.length; i++) {
        if(budget >= d[i]) {
            budget -= d[i];
            count += 1;
        }
    } return count;
}