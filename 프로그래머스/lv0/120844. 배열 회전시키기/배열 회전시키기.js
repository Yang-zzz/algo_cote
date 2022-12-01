function solution(numbers, direction) {
    let empty = 0;
    if(direction[0] === 'r') {
        empty = numbers.pop();
        numbers.unshift(empty);
        return numbers
    } else if (direction[0] === 'l') {
        empty = numbers.shift();
        numbers.push(empty);
        return numbers
    }
}