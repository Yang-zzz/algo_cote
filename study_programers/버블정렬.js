// 버블정렬
// 인접해 있는 인덱스 끼리 비교 후
// 현재인덱스 값 > 다음 인덱스값 -> 통과
// 현재인덱스 값 < 다음 인덱스 값 -> 두 값의 위치를 바꾼다.

const array = [5, 13, 3, 20, 9, 16, 1, 4];

function select(arr) {
    let empty = 0; // 임시 저장공간
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j <arr.length; j++) {
            if(arr[i] < arr[j]) {
                // 현재 인덱스 값이, 다음 인덱스 값 보다 작을 때. 두 값의 위치를 바꾼다.
                empty = arr[i]; 
                // 임시 저장공간에 현재 인덱스 값을 할당하고
                arr[i] = arr[j]; 
                // 비어있는 현재 인덱스에 다음 인덱스 값을 할당
                arr[j] = empty; 
                // 비어있는 다음 인덱스에 임시저장공간에 있던 값을 다음 인덱스에 저장.
            }
        }
    } return arr 
}
console.log(select(array));



/*
            if( 5 < 13 ) {
                // 현재 인덱스 값이, 다음 인덱스 값 보다 작을 때. 두 값의 위치를 바꾼다.
                0 = 5; 
                // 임시 저장공간에 현재 인덱스 값을 할당하고
                0 = 13; 
                // 비어있는 현재 인덱스에 다음 인덱스 값을 할당
                0 = 5; 
                // 비어있는 다음 인덱스에 임시저장공간에 있던 값을 다음 인덱스에 저장.

*/