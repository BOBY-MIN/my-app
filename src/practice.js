"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
////////////////// 변수 자료형 지정 예시
console.log("변수 자료형 지정 예시 ========================== 시작");
var message = 'hello world';
console.log(message);
var count = 0; // 숫자
count += 1;
// count = '갑자기 분위기 문자열'; // 이러면 에러가 납니다!
// const message: string = 'hello world'; // 문자열
var done = true; // 불리언 값
var numbers = [1, 2, 3]; // 숫자 배열
var messages = ['hello', 'world']; // 문자열 배열
// messages.push(1); // 숫자 넣으려고 하면.. 안된다!
var mightBeUndefined = undefined; // string 일수도 있고 undefined 일수도 있음
var nullableNumber = null; // number 일수도 있고 null 일수도 있음
var color = 'red'; // red, orange, yellow 중 하나임
color = 'yellow';
// color = 'green'; // 에러 발생!
console.log("변수 자료형 지정 예시 ========================== 끝");
///////////////// 함수 생성 예시
console.log("함수 생성 예시 ========================== 시작");
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
// 리턴값이 없는 경우 void 로 선언
function returnNothing() {
    console.log('I am just saying hello world');
}
console.log("함수 생성 예시 ========================== 끝");
////////////////// 인터페이스 활용 예시
console.log("인터페이스 활용 예시 ========================== 시작");
var Circle = /** @class */ (function () {
    // constructor에 접근자 지정 시 멤버변수 선언 안해도 됨.
    // radius: number;
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    // constructor에 접근자 지정 시 멤버변수 선언 안해도 됨.
    // width: number;
    // height: number;
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(10, 5)];
var circle = new Circle(10);
console.log(circle.radius);
console.log(circle.getArea());
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
console.log("인터페이스 활용 예시 ========================== 끝");
/////////////////////// interface 를 일반 객체에 활용하기
console.log("인터페이스 일반객체 활용 예시 ========================== 시작");
var person = {
    name: 'boby',
    age: 20
};
var expert = {
    name: 'min',
    skills: ['java', 'react']
};
var peoples = [person, expert];
peoples.forEach(function (people) {
    console.log(people.name);
    console.log(people.age);
});
console.log("인터페이스 일반객체 활용 예시 ========================== 끝");
/////////////////////// 함수에서 제네릭 활용 예시
console.log("함수에서 제네릭 활용 예시 ========================== 시작");
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var merged = merge({ foo: 1 }, { bar: "string" });
console.log(JSON.stringify(merged));
function wrap(param) {
    return {
        param: param
    };
}
var wrapped = wrap(10);
console.log(wrapped);
console.log(wrapped.param);
console.log("함수에서 제네릭 활용 예시 ========================== 끝");
/////////////////////// 인터페이스에서 제네릭 활용 예시
console.log("인터페이스에서 제네릭 활용 예시 ========================== 시작");
var items = {
    list: ['a', 'b', 'c']
};
console.log(JSON.stringify(items));
items.list.forEach(function (element) {
    console.log(element);
});
console.log("인터페이스에서 제네릭 활용 예시 ========================== 끝");
/////////////////////// 클래스에서 제네릭 활용 예시
console.log("클래스에서 제네릭 활용 예시 ========================== 시작");
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var queue = new Queue();
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
