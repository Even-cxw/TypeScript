// interface(关键字) 接口
interface Person1 {
  name:string, // : 必须要写
  age:number,
  gender?:string, // ?可选
  [propName: string]: any, // 任意类型
}
// 区别 interface可继承， type不可以继承
type Person2 = {}
let person:Person1 = {
  name:'Even',
  age: 28,
  ids:[12,12,12],
  id2:[12,12,12],
  id3: 'shi',
}