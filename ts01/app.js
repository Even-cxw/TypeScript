"use strict";
// 基本数据类型
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// number
var num = 20;
num = 23;
// 原型: 等同于
// let num: number = 25
// boolean
var isLogin = true;
// 任意类型
var anything = 'age';
anything = 12;
// 数组 元组 枚举
// 1. 数组
var names01 = ['hello'];
var names02 = ['hello'];
var name03 = ['hello'];
// 2.元组
var colors = ['hell', 12];
// 3.枚举 enum
var Color;
(function (Color) {
    Color[Color["number"] = 0] = "number";
    Color[Color["yellow"] = 1] = "yellow";
    Color[Color["red"] = 2] = "red";
})(Color || (Color = {}));
var myColor = Color.red; // 获取角标
var myColorVal = Color[myColor]; // 获取值
console.log(myColor);
console.log(myColorVal);
// 函数的相关类型
// 1.返回值类型
function returnVal01() {
    return 1;
}
// 2.返回值空
function returnVal02() {
    console.log('hello');
}
// 3.参数类型
function returnVal03(value1, value2) {
    return value1 + value2;
}
// 4.函数类型
var myFun;
myFun = returnVal03;
// object & type
var dataObj = {
    age: 12,
    name: 'Even'
};
dataObj = {
    age: 12,
    name: 'levi'
};
// 复杂对象类型
var complex = {
    data: [1],
    myfun: function (item) {
        return [item];
    }
};
// null undefined;
var myNull = null;
myNull = undefined;
var myNull01 = null;
// never 是任何类型的子类型，
var x;
// x = 123 不能讲其他类型转成never类型
// never的应用，抛出异常
function loop(message) {
    throw new Error(message);
}
// 将任何类型转成never类型；
var y = 1;
// y = (()=>{throw new Error()})()
// class 类(属性,方法)
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        // 被保护 当前类跟继承类可以使用
        this.gender = '男';
        // 私有的 当前类可以使用
        this.age = 27;
        this.name = name;
        this.username = name;
    }
    Person.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    return Person;
}());
var person = new Person('Even', 'levi');
person.setGender('上海');
// 类的继承
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name) {
        return _super.call(this, name, name) || this;
    }
    return Student;
}(Person));
// class类get\set
var Person2 = /** @class */ (function () {
    function Person2() {
        this._name = 'Even';
    }
    Object.defineProperty(Person2.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person2.prototype, "setName", {
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Person2;
}());
var person2 = new Person2();
person2.setName = 'levi';
console.log(person2.getName);
/**
 * @desc namespace:命名空间
 * 1. 多个文件合成一个文件时(将circle.ts sumValue.ts 合成 app.js)文件；
 * tsc --outfile app.js circle.ts sumValue.ts
 * 2. 打包单个文件
 * tsc app.ts --outfile app.js
 * 3.文件引入 /// <reference paht=""/>
 */
var MyMath01;
(function (MyMath01) {
    var PI = 3.14;
    function sumValue(num1, num2) {
        return num1 + num2;
    }
    MyMath01.sumValue = sumValue;
})(MyMath01 || (MyMath01 = {}));
console.log(MyMath01.sumValue(12, 12));
/**
 * @decs 模块
 * 网站： https://www.bootcdn.cn
 * 1. tsc --module commonjs app.ts
 * 2. tsc --module amd app.ts
 * 3. system.js 在index.html内引入；
 */
var sumValueModule = __importStar(require("./stuff/sumValue"));
var a1 = sumValueModule.sumValue02(12, 100);
console.info(a1);
