// function solution(my_string) {
//     return my_string.match(/\d/g)
//              .sort((a, b) => a - b)
//              .map((x) => Number(x));
// }
// 정규표현식 '문자열'.math()는  '문자열'안에 매개변수로 받는 인자와 동일한 데이터가 있다면 배열로 반환함.
// /d 는 숫자, g 는 글로벌전역 을 뜻 함. 


function solution(my_string) {
    return my_string.split("")
        .filter((v) => !isNaN(v))
        .map((x) => x * 1)
        .sort((a, b) => a - b);
}

//  IsNaN()은 매개변수가 NaN인지 아닌지 판단하는 함수,
//  v 인자는 문자열숫자or 문자열 형태이다.
//  문자열숫자형태 인자는 !isNaN(v) -> ! false -> true
//  문자열 인자는 !isNaN(v) -> ! true -> false
//  map() 메서드로 받는 인자들은 * 1 연산되면 숫자형으로 변환됨.

