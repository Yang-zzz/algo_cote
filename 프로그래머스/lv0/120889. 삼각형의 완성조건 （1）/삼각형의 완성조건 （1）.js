// 가장 긴변의 길이는 다른 두변의 길이의 합보다 작야아 한다.
// 배열을 sort 후, 가장큰 수를 기준으로
function solution(sides) {
    sides.sort((a,b)=>b-a);
    for(let i=0; i<sides.length; i++) {
        if(sides[0] < sides[1] + sides[2]) {
            return 1
        } else if (sides[0] >= sides[1] + sides[2]) {
            return 2
        }
    }
}