function solution(numbers) {
    let sum = 0
    numbers.map((_, i) => sum += numbers[i])
    return (sum / numbers.length)
}