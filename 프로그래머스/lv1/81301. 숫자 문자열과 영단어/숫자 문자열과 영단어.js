// 1. 숫자영단어가 들어간 배열을 만든다.
// 2. 매개변수로 받는 문자열에서 영단어를 찾는다
//  - 정규표현식
// 3. 찾은 영단어를 숫자영단어가 들어간 배열을 비교하여 일치하면 해당배열의 인덱스로 치환한다.

let alpha = [/zero/g, /one/g, /two/g, /three/g, /four/g, /five/g, /six/g, /seven/g, /eight/g, /nine/g];
function solution(s) {
    if(isNaN(s)) {
        for(let i=0; i<alpha.length; i++) {
            s = s.replaceAll(alpha[i],i);
        } return Number(s)
    } else return Number(s)
}