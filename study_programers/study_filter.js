// 예시 배열
let arr = [5, 10, 7, 20, 8];

/**
 * array(배열)의 모든 요소를 순회
 * - array가 배열이 아닐 경우 에러 메세지 표시 -> Array.isArray()
 * - callback 이 함수가 아닐 경우 에러 메세지 표시 -> typeof
 * @param array  순회할 배열
 * @param callback (value, index) 형식의 2개의 param을 갖는 함수
 */
function filter(array, callback) {
    if (!Array.isArray(array)) {
        console.log(`${array} 는 array가 아닙니다.`)
        return
    }
    if (typeof(callback) !== 'function') {
        console.log(`${callback}은 function 아닙니다.`)
    }
    const newArray = [];
    for(let i=0; i<array.length; ++i) {
        if(callback(array[i], i) === true) {
            newArray[i] = callback(array[i],i);
        } return newArray
    }
}

// let filteredA = filter(123, (value, index)=>{}); // 'array가 아닙니다'
// let filteredB = filter(arr, 123); // '함수가 아닙니다'

// console.log(filteredA);
// console.log(filteredB);

let filteredC = filter(arr, (value, index) => {
  return value >= 10; // 10
});

let filteredD = filter(arr, (value, index) => {
  return value <= 5; // 없음.
});

console.log(filteredC);
console.log(filteredD);


// ========================================
// 추가 연습

// let filteredE; // 홀수만 출력
// let filteredF; // 짝수만 출력

// let filteredG; // 소수만 출력 <-


// // 밑에 있는 people 자료 활용
// let filteredH; // 안경 쓴 사람만 출력
// let filteredI; // 아이폰 유저만 출력

// const Phone = {
//   Galaxy : "Galaxy",
//   iPhone : "iPhone",
// }

// Object.freeze(Phone);

// let people = [
//   {
//     name : "염예찬",
//     phone : Phone.Galaxy,
//     glasses : true
//   },
//   {
//     name : "하승우",
//     phone : Phone.Galaxy,
//     glasses : true
//   },
//   {
//     name : "임하늘",
//     phone : Phone.iPhone,
//     glasses : false
//   },
//   {
//     name : "강희",
//     phone : Phone.iPhone,
//     glasses : true
//   },
//   {
//     name : "다솜",
//     phone : Phone.Galaxy,
//     glasses : false
//   },
//   {
//     name : "이준엽",
//     phone : Phone.Galaxy,
//     glasses : true
//   },
//   {
//     name : "양지성",
//     phone : Phone.iPhone,
//     glasses : false
//   }
// ];