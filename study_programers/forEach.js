/**
 * - array가 배열이 아닐 경우 에러 메세지 표시 -> Array.isArray()
 * - callback 이 함수가 아닐 경우 에러 메세지 표시 -> typeof
 * @param array 순회할 배열
 * @param callback (value, index) 형식의 2개의 param을 갖는 함수
 */

//예시 배열
let arr =[5, 10, 7, 20, 8];
const callback = function(value, index) {
    return console.log(`${index} 번째 값 : ${value}`)
};

function MyforEach(array, callback) {
    if(!Array.isArray(array)) {
        return console.log('array가 아닙니다.')
    } else if(Array.isArray(array)) {
        for(let i=0; i<array.length; i++) {
            if(typeof(callback)===typeof(function(){})) {
                callback(array[i], i)
            } else {
                return console.log('not 함수')
            }
    }
 };
}


// MyforEach(123,(value, index) => {}); // 'array가 아닙니다.'
MyforEach(arr, 123); // '함수가 아닙니다.'
