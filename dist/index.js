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
let num = 0;
let arr = [];
while (num != -1) {
    num = Number(prompt("enter number"));
    arr.push(num);
}
alert(getAverage(arr));
function getAmountOfPositive(arr) {
}
