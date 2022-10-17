const array = [1,2,3,4,5,6,7,8,9,10];

function solution(numbers) {
    let sum = 0;
    let answer = numbers.forEach((_) => (sum += el) / numbers.length )
    console.log(answer);
}

solution(array);