function solution(n, k) {
    let sheep_cost = n *12000 ;
    let drink_cost = (k - Math.floor(n/10)) * 2000
    answer = sheep_cost + drink_cost;
    return answer;
}