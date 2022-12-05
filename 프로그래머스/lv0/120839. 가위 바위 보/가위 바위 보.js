function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2,
    }
   let answer = [...rsp].map((el) => arr[el])
   return answer.join("");
}  
