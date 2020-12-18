// 基本数据类型

// number
let num = 20;
num = 23;
// 原型: 等同于
// let num: number = 25

// boolean
let isLogin:boolean = true;
// 任意类型
let anything:any = 'age';
anything = 12;

// 数组 元组 枚举
// 1. 数组
let names01:Array<String> = ['hello'];
let names02:String[] = ['hello'];
let name03:any[] = ['hello']
// 2.元组
let colors: [String,Number] = ['hell',12];
// 3.枚举 enum
enum Color {
  number,
  yellow,
  red,
}
let myColor:Color = Color.red; // 获取角标
let myColorVal:String = Color[myColor]; // 获取值
console.log(myColor);
console.log(myColorVal);

// 函数的相关类型
// 1.返回值类型
function returnVal01():number {
  return 1
}
// 2.返回值空
function returnVal02():void {
  console.log('hello')
}
// 3.参数类型
function returnVal03(value1:number, value2:string,):string {
  return value1 + value2
}
// 4.函数类型
let myFun:(a:number, b: string) => string;
myFun = returnVal03;

// object & type
let dataObj:{age:number, name:String} = {
  age: 12,
  name: 'Even'
}
dataObj = {
  age: 12,
  name: 'levi'
}
// 复杂对象类型
let complex : {data:Number[],myfun:(item:number) => number[]} = {
  data: [1],
  myfun:(item) => {
    return [item];
  }
}

// null undefined;
let myNull = null;
myNull = undefined;
let myNull01: null = null;

// never 是任何类型的子类型，
let x:never;
// x = 123 不能讲其他类型转成never类型
// never的应用，抛出异常
function loop(message:string):never {
  throw new Error(message);
}
// 将任何类型转成never类型；
let y:number = 1;
// y = (()=>{throw new Error()})()

// class 类(属性,方法)
class Person {
  constructor(name:string, public username:string) {
    this.name = name;
    this.username = name;
  }
  // 都可以使用
  public name: string;
  // 被保护 当前类跟继承类可以使用
  protected gender: string = '男';
  // 私有的 当前类可以使用
  private age: number = 27;
  setGender(gender:string) {
    this.gender = gender
  }
}
let person = new Person('Even', 'levi');
person.setGender('上海');
// 类的继承
class Student extends Person {
  constructor(name:string) {
    super(name, name);
  }
}
// class类get\set
class Person2 {
  private _name:string = 'Even'
  constructor() {}
  get getName() {
    return this._name;
  }
  set setName(name:string) {
    this._name = name
  }
}
let person2 = new Person2()
person2.setName = 'levi'
console.log(person2.getName);

/**
 * @desc namespace:命名空间
 * 1. 多个文件合成一个文件时(将circle.ts sumValue.ts 合成 app.js)文件；
 * tsc --outfile app.js circle.ts sumValue.ts
 * 2. 打包单个文件
 * tsc app.ts --outfile app.js
 * 3.文件引入 /// <reference paht=""/>
 */
namespace MyMath01 {
  const PI:number = 3.14;
  export function sumValue(num1:number, num2:number):number {
    return num1+num2
  } 
}
console.log(MyMath01.sumValue(12,12));

/**
 * @decs 模块
 * 网站： https://www.bootcdn.cn
 * 1. tsc --module commonjs app.ts
 * 2. tsc --module amd app.ts
 * 3. system.js 在index.html内引入；
 */
import * as sumValueModule from './stuff/sumValue'
let a1 = sumValueModule.sumValue02(12,100);
console.info(a1);