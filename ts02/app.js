"use strict";
var person = {
    name: 'Even',
    age: 28,
    salary: 7000,
    ids: [12, 12, 12],
    id2: [12, 12, 12],
    id3: 'shi',
    subValue: function (val) { },
};
var Person3 = /** @class */ (function () {
    function Person3() {
        this.id = 12;
        this.type = 'worker';
        this.name = 'levi';
        this.age = 28;
    }
    return Person3;
}());
var a1 = {
    name: 'Even',
    age: 12,
    gender: 'man'
};
// TypeScript中的泛型（generic）
//在函数中的使用泛型
function a2(age) {
    return age;
}
console.log(a2(true));
var c2 = function d2(arg) {
    return arg;
};
var f2 = function g2(arg) {
    return arg;
};
// 为泛型添加约束
function getLength(obj) {
    return obj.length;
}
var obj = ['1', '2'];
console.log('泛型', getLength(obj));
// 泛型在class类中应用
var A3 = /** @class */ (function () {
    function A3(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }
    A3.prototype.calcalNum = function () {
        return +this.number1 * +this.number2;
    };
    return A3;
}());
var a3 = new A3(12, 2);
console.log('在类中泛型的应用', a3.calcalNum());
