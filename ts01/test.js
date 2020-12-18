"use strict";
var sumValue = {
    money: 200,
    count: function (value) {
        this.money += value;
    }
};
var handleCount = {
    name: 'Even',
    sumValue: sumValue,
    friends: ['Even', 'Levi']
};
handleCount.sumValue.count(500);
console.log(handleCount); //
