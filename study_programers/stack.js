/**
 * 조건
 * 0. init을 통해 stack안에 STACK_SIZE만큼 null 값이 들어간다.
 * 1. stack의 크기는 STACK_SIZE를 초과할 수 없다.
 * 2. stack의 크기가 꽉찼을 때 추가로 push를 실행할 경우 console.log를 통해 에러메세지를 출력한다.
 * 3. push와 pop이 호출될때 마다 top의 값이 바뀐다.
 * 4. stack이 비어있을 때 pop을 호출하면 -1이 반환된다.
 */

 const stack = []; // 스택 공간
 const STACK_SIZE = 5; // 스택의 최대 사이즈
 let top; // 초기값 필요

/* * stack 초기화 */
function init() {
    for(let i=0; i<STACK_SIZE; i++){
        stack[i] = null;
    } return stack
} // 배열의 길이 5, null로 채워진 배열생성

/* * stack에 값을 집어 넣는다. */
function push(num) {
    for(let i=0; i<stack.length; i++) {
        if(stack[i] === null) {
            stack[i] = num;
            top = num;
            break
        }
    }
};

/* * stack에서 값을 빼낸다. */
function pop() {
    let pop_return = 0;
    for(let i=1; i<=stack.length; i++) {
        if(stack[stack.length-i]!== null) {
            pop_return = stack[stack.length-i];
            stack[stack.length-i] = null;
            top = stack[stack.length-(i+1)];
            break
        }
    } return pop_return
}

/* * 현재 top의 위치를 반환한다. */
function peek() {
    return top
}

init(); // [null, null, null, null, null]
// console.log(init());
push(5); // [5, null, null, null, null]
push(10); // [5, 10, null, null, null]
console.log(peek());
push(15); // [5, 10, 15, null, null]
console.log(peek());
push(20); // [5, 10, 15, 20, null]
console.log(peek());
push(25); // [5, 10, 15, 20, 25]
console.log(peek());
console.log(stack);
pop()
console.log(peek());
pop()
console.log(peek());
pop()
console.log(peek());
pop()
pop()
console.log(stack);
// peek(); // 1 반환
// pop(); // [5, null, null, null, null] -> 10반환
// peek(); // 0 반환