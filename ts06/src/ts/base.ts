
/**
 * @@Desc 定义泛型函数、泛型对象一起共用
 */

// 泛型函数
interface Ifun<T> = (val: T) => void;

let fun1:Ifun<string> = (val:string) => {
  console.log('val', val)
}

let fun2:Ifun<number> = (val:number) => {
  console.log(val)
}

// 泛型对象
type Iobj<T> = {
  age: T,
  num: T
}