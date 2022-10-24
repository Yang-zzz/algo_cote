function solution(my_string) {
    let answer = '';
    for(str of my_string) {
        console.log(str);
        answer = str + answer;
    }
    return answer;
}