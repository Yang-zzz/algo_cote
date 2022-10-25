function solution(n) {
    let checkNum = 1;
    let gggom = 1;
// 팩토리얼 세고 싶은 아이 -> 0! -> 1! -> 2! -> 3! -> ... -> 10! -> .... -> 99!
    while(n >= checkNum) { // #1  - checkNum >= n
        checkNum *= gggom;   // #2
        gggom += 1;          // #3
        console.log(`checkNum: ${checkNum}`)
        console.log(`gggom: ${gggom}`)
    }
    return gggom-2
}
