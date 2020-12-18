/**
 * @desc 练习
 * 1. type声明类型用等于号
 * 2. 对象函数也要单独声明
 * 3. 对象属性不需要再次声明
 */
type sumValueType = {money:number,count:(value:number) => void};
let sumValue:sumValueType = {
  money: 200,
  count(value:number):void {
    this.money += value;
  }
}
let  handleCount:{name:string,sumValue:sumValueType,friends:string[]} = {
  name: 'Even',
  sumValue: sumValue,
  friends: ['Even','Levi']
}
handleCount.sumValue.count(500);
console.log(handleCount); //
