// interface(关键字) 接口
interface Person1 {
  name:string, // : 必须要写
  age:number,
  gender?:string, // ?可选
  readonly salary:number, // 只读属性
  [propName: string]: any, // 任意类型
  subValue:(val:number) => void,
}
// 区别 interface可继承， type不可以继承
// 接口应用到对象中
type Person2 = {}
let person:Person1 = {
  name:'Even',
  age: 28,
  salary: 7000,
  ids:[12,12,12],
  id2:[12,12,12],
  id3: 'shi',
  subValue(val) {},
}
// 接口应用到class中 implements
interface person3Interface1 {
  id:number,
  type: string,
}
interface person3interface2 {
  name: string,
  age: number,
}
class Person3 implements person3Interface1,person3interface2 {
  public id:number = 12
  public type:string = 'worker'
  public name:string = 'levi'
  public age:number = 28
}
// interface继承
interface person3interface3 extends person3interface2 {
  gender:string
}
const a1:person3interface3 = {
  name: 'Even',
  age: 12,
  gender: 'man'
}

// TypeScript中的泛型（generic）
//在函数中的使用泛型
function a2<T>(age:T):T {
  return age;
}
console.log(a2(true));
//在接口中使用泛型1
interface b2 {
  <T>(arg:T):T,
}
let c2:b2 = function d2<T>(arg:T):T {
  return arg
}
//在接口中使用泛型2
interface e2<T> {
  (arg:T):T
}
let f2:e2<string|number> = function g2<T>(arg:T):T {
  return arg
}
// 为泛型添加约束
function getLength<T extends {length:number}>(obj:T):number {
  return obj.length;
}
let obj:string[] = ['1','2']
console.log('泛型', getLength(obj))
// 泛型在class类中应用
class A3<T>{
  number1: T
  number2: T
  constructor(number1: T,number2: T) {
    this.number1 = number1;
    this.number2 = number2;
  }
  calcalNum():number {
    return +this.number1 * +this.number2;
  }
}
let a3 = new A3<number>(12,2);
console.log('在类中泛型的应用',a3.calcalNum());
