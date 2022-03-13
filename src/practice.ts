////////////////// 변수 자료형 지정 예시
console.log("변수 자료형 지정 예시 ========================== 시작");
const message: string = 'hello world';
console.log(message);


let count = 0; // 숫자
count += 1;
// count = '갑자기 분위기 문자열'; // 이러면 에러가 납니다!

// const message: string = 'hello world'; // 문자열

const done: boolean = true; // 불리언 값

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['hello', 'world']; // 문자열 배열

// messages.push(1); // 숫자 넣으려고 하면.. 안된다!

let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefined 일수도 있음
let nullableNumber: number | null = null; // number 일수도 있고 null 일수도 있음

let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나임
color = 'yellow';
// color = 'green'; // 에러 발생!


console.log("변수 자료형 지정 예시 ========================== 끝");
///////////////// 함수 생성 예시
console.log("함수 생성 예시 ========================== 시작");
function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}
  
const total = sumArray([1, 2, 3, 4, 5]);

// 리턴값이 없는 경우 void 로 선언
function returnNothing(): void {
    console.log('I am just saying hello world');
}


console.log("함수 생성 예시 ========================== 끝");

////////////////// 인터페이스 활용 예시
console.log("인터페이스 활용 예시 ========================== 시작");
interface Shape {
    getArea(): number;
}

class Circle implements Shape {

    // constructor에 접근자 지정 시 멤버변수 선언 안해도 됨.
    // radius: number;

    constructor(public radius: number){
        this.radius = radius;
    }
    
    getArea(): number {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {

    // constructor에 접근자 지정 시 멤버변수 선언 안해도 됨.
    // width: number;
    // height: number;

    constructor(private width: number, private height: number) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];
const circle = new Circle(10);

console.log(circle.radius);
console.log(circle.getArea());

shapes.forEach(shape => {
    console.log(shape.getArea());
});


console.log("인터페이스 활용 예시 ========================== 끝");
/////////////////////// interface 를 일반 객체에 활용하기
console.log("인터페이스 일반객체 활용 예시 ========================== 시작");
interface Person {
    name: string;
    age?: number; // 물음표는 설정을 해도 되고, 안해도 되는 값임을 의미
}


interface Developer extends Person {
    skills: string[];
}

const person: Person = {
    name: 'boby'
    ,age: 20
}

const expert: Developer = {
    name: 'min'
    ,skills: ['java', 'react']
}

const peoples: Person[] = [person, expert];

peoples.forEach(people => {
    console.log(people.name);
    console.log(people.age);
})

console.log("인터페이스 일반객체 활용 예시 ========================== 끝");




/////////////////////// 함수에서 제네릭 활용 예시
console.log("함수에서 제네릭 활용 예시 ========================== 시작");
function merge<A, B>(a: A, b: B): A & B {
    return {
        ...a
        ,...b
    }
}

const merged = merge({ foo: 1 }, { bar: "string" });
console.log(JSON.stringify(merged));


function wrap<T>(param: T) {
    return {
        param
    }
}

const wrapped = wrap(10);

console.log(wrapped);
console.log(wrapped.param);

console.log("함수에서 제네릭 활용 예시 ========================== 끝");


/////////////////////// 인터페이스에서 제네릭 활용 예시
console.log("인터페이스에서 제네릭 활용 예시 ========================== 시작");

interface Items<T> {
    list: T[];
}

const items: Items<string> = {
    list: ['a', 'b', 'c']
}

console.log(JSON.stringify(items));
items.list.forEach(element => {
    console.log(element);
});

console.log("인터페이스에서 제네릭 활용 예시 ========================== 끝");


/////////////////////// 클래스에서 제네릭 활용 예시
console.log("클래스에서 제네릭 활용 예시 ========================== 시작");
class Queue<T> {
    list: T[] = [];
    
    get length() {
        return this.list.length;
    }

    enqueue(item: T) {
        this.list.push(item);
    }

    dequeue() {
        return this.list.shift();
    }
}


const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log("클래스에서 제네릭 활용 예시 ========================== 끝");

export {}