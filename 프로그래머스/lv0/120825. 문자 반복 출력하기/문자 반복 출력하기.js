function solution(my_string, n) {
    let arr = [...my_string].map(el => el.repeat(n)).join('')
    return arr
}