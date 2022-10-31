function solution(left, right) {
    let arr = [];
    let count = 0;

    function 약수(num) {
        let empty = [];
        for(let i=0; i<=num; i++) {
            if(num%i===0) {
                empty.push(i);
            }
        } return empty.length;
    }

    for(let i=left; i<=right; i++) {
        if(약수(i)%2===0) {
            count += i
        } else if(약수(i)%2===1) {
            count -= i
        }
    } return count
};
