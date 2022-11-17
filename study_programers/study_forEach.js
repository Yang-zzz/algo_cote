/**
 * - array가 배열이 아닐 경우 에러 메세지 표시 -> Array.isArray()
 * - callback 이 함수가 아닐 경우 에러 메세지 표시 -> typeof
 * @param array 순회할 배열
 * @param callback (value, index) 형식의 2개의 param을 갖는 함수
 */
//예시 배열

let arr = [5, 10, 7, 20, 8];
const callback = function (value, index) {
    return console.log(`${index} 번째 값 : ${value}`)
};

// 구현 답안
function MyforEach(array, callback) {
    if (!Array.isArray(array)) {
        return console.log('not array')
    } else if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            if (typeof (callback) === typeof (function () { })) {
                callback(array[i], i)
            } else {
                return console.log('not function')
            }
        }
    };
}


MyforEach(123,(value, index) => {}); // 'array가 아닙니다.'
MyforEach(arr, 123); // '함수가 아닙니다.'
MyforEach(arr, callback);

// 강사답안
function forEach(array, callback) {
	if(!Array.isArray(array)) {
		// array가 아닐경우
		console.error(`${array}는 Array 가 아닙니다.`);
		return;
	}
	
	if(typeof callback !== 'function') {
		// callback이 함수가 아닐 경우
		console.error(`${callback}는 function이 아닙니다.`);
		return;
	}
	let i;
	for(i = 0; i < array.length; ++i) {
		callback(array[i], i);
	}
	for(let i = 0; i < array.length; ++i) {
		callback(array[i], i);
	}
}