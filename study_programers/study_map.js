// 예시 배열
let arr = [5, 10, 7, 20, 8];
let arr2 = [
    {
        firstName: '하',
        lastName: '승우'
    },
    {
        firstName: '임',
        lastName: '하늘'
    },
    {
        firstName: '염',
        lastName: '예찬'
    }
]

/**
 * array(배열)의 모든 요소를 순회
 * - array가 배열이 아닐 경우 에러 메세지 표시 -> Array.isArray()
 * - callback 이 함수가 아닐 경우 에러 메세지 표시 -> typeof
 * @param array  순회할 배열
 * @param callback (value, index) 형식의 2개의 param을 갖는 함수
 */

function map(array, callback) {
  const empty = [];
  if(!Array.isArray(array)) {
    console.log(`${array}는 array가 아닙니다.`);
    return
  } // 예외처리
  if(typeof callback !== 'function') {
    console.log(`${callback}는 function가 아닙니다.`);
    return
  }// 예외처리

	for(let i = 0; i<array.length; ++i) {
    empty[i] = callback(array[i],i);
	} return empty
}

let mappedA = map(123, (value, index)=>{}); // 'array가 아닙니다'
let mappedB = map(arr, 123); // '함수가 아닙니다'

console.log(mappedA);
console.log(mappedB);

let mappedC = map(arr, (value, index) => {
  console.log(`${index} 번째 값 : `, value);
});


let mappedD = map(arr, (value, index) => {
  return value;
});

console.log(mappedC);
console.log(mappedD);



// 결과 링크
// https://docs.google.com/presentation/d/1U8HPf1Lx9Flb2ts_GQ6qVgqstnPPCQabNiT-hZUtvlQ/edit?usp=sharing
// 11번쨰 페이지


// callback 
function callbackResultTest(callback) {
  	let result = callback();
	console.log(result);
}

callbackResultTest(()=>{
	return "myValue";
})