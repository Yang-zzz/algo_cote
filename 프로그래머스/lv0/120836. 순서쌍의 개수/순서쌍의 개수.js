function solution(n) {
    let count = 0;
    let arr = [];
    for(let i=1; i<=n; i++) {
        if(n % i === 0) {
            count += 1;
        }
    } return count 
}