function solution(array, height) {
    let more = 0;
    for(i of array) {
        if (height < i) {
            more += 1
        }
    } return more
};