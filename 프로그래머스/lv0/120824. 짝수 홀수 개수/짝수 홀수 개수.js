function solution(num_list) {
    let even = num_list.filter(x => (x % 2) === 0);   // 짝수
    let odd = num_list.filter(x => (x % 2) === 1);   // 홀수
    let result = []
    result.push(Object.keys(even).length, Object.keys(odd).length)
    return result
}



console.log(solution([1, 2, 3, 4, 5]))   // [2,3]
console.log(solution([1, 3, 5, 7]))   // [0,4