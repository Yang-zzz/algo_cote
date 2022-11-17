const queue = []; // 스택 공간
const QUEUE_SIZE = 5; // 스택의 최대 사이즈
let front = 0; // 초기값 필요
let rear = -1; // 초기값 필요

/**
 * 조건
 * 0. init을 통해 queue안에 QUEUE_SIZE만큼 null 값이 들어간다.
 * 1. queue의 크기는 QUEUE_SIZE를 초과할 수 없다.
 * 2. queue의 크기가 꽉찼을 때 추가로 enqueue를 실행할 경우 console.log를 통해 에러메세지를 출력한다.
 * 3. enqueue()가 호출될 때 rear값이 바뀐다.
 * 4. dequeue()가 호출될 때 front값이 바뀐다.
 * 5. queue가 비어있을때 dequeue()를 호출하면 -1이 반환된다.
 * 6. front와 rear가 같은 위치에 있을 때 dequeue()가 호출되면 front와 rear의 위치가 초기화 된다.
 */

// 구현 답안

/**
 * queue 초기화
 */
function init() {
    for(let i=0; i<QUEUE_SIZE; i++) {
        queue[i] = null;
    } 
}

/**
 * queue에 값을 집어 넣는다.
 */
function enqueue(value) {
    if (rear === QUEUE_SIZE - 1) {
        console.log("queue over flow");
        return;
    }
    ++rear;
    queue[rear] = value;
}

/**
 * queue에서 값을 빼낸다.
 */
function dequeue() {
    if(front === rear) {
        queue[QUEUE_SIZE-1] = null;
        rear = -1;
        return console.log(-1);
    }
    const value = queue[front];
    queue[front] = null;
    ++front;
    return console.log(value)
}

/**
 * 현재 top의 위치를 반환한다.
 * [null, 5, 2, 3, null] 인 경우 3이 반환 돼야함
 */
function size() {

}

init(); // [null, null, null, null, null]
console.log(queue)
enqueue(5);
enqueue(10); 
enqueue(15); 
enqueue(20); 
enqueue(25); 
console.log(queue); // [5, 10, 15, 20, 25] 
dequeue(); //5
console.log(queue);
dequeue(); // 10
console.log(queue);
dequeue(); // 15
console.log(queue);
dequeue();// 20
console.log(queue);
dequeue();// 25
console.log(queue);
dequeue();
dequeue();
dequeue();
dequeue();
console.log(rear)
console.log(front)

// size(); // 2 반환
// dequeue(); // [null, 10, null, null, null] -> 5반환
// enqueue(7); // [null, 10, 7, null, null]
// dequeue(); // [null, null, 7, null, null] -> 10 반환

// 강사 답안

function init() {
	for(let i = 0; i<QUEUE_SIZE; i++) {
		queue[i] = null;
	}
	reset();
}

function reset() {
	front = -1;
	rear = -1;
}

/**
 * queue에 값을 집어 넣는다.
 */
function enqueue(value) {
	if(rear === QUEUE_SIZE - 1) {
		console.error('queue over flow');
		return;
	}
	
	if(front < 0) {
		front = 0;
	}
	rear++;
	queue[rear] = value;
}

/**
 * queue에서 값을 빼낸다.
 */
function dequeue() {
	if(front < 0) {
		return -1;
	}
	
	const value = queue[front];
	queue[front] = null;
	
	if(front === rear) {
		// [null, null, null, null, null]
		reset();
	} else {
		front++;
	}
	return value;
}

/**
 * 현재 Queue의 사이즈를 반환한다.
 * [null, 5, 2, 3, null] 인 경우 3이 반환 돼야함
 */
function size() {
	return rear - front + 1;
}