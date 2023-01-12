"use strict";
function getAverage(arr) {
    let count = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        count++;
    }
    return (sum / count);
}
// let num:number=0;
// let arr :number[]=[];
// while(num!=-1)
// {
// num=Number (prompt ("enter number"));
// arr.push(num);
// }
// alert( getAverage(arr));
function getAmountOfPositive(arr) {
    let co = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            co++;
        }
    }
    return co;
}
let num = 0;
let arr = [];
while (num != -1) {
    num = Number(prompt("enter number"));
    arr.push(num);
}
alert(getAmountOfPositive(arr));
