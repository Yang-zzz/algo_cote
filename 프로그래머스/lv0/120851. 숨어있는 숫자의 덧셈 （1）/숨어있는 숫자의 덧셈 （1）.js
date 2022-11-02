function solution(my_string) {
    let answer = 0;
    my_string.match(/[0-9]/g).forEach(el => answer += parseInt(el));
    return answer
}
