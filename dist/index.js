"use strict";
// function getAverage(arr:number[]):number{
//     let count:number = 0;
//     let sum: number = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i];
//         count++;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//     }
//    return (sum/count);
// }
// // let num:number=0;
// // let arr :number[]=[];
// // while(num!=-1)
// // {
// // num=Number (prompt ("enter number"));
// // arr.push(num);
// // }
// // alert( getAverage(arr));
// function getAmountOfPositive(arr:number[]):number{
//     let co:number=0;
//      for (let i = 0; i < arr.length; i++) {
//         if(arr[i]>0)
//         {
//             co++;
//         }
//      }
//      return co;
// }
// let num:number=0;
// let arr :number[]=[];
// while(num!=-1)
// {
// num=Number (prompt ("enter number"));
// arr.push(num);
// }
// alert( getAmountOfPositive(arr));
// function sortList(arr:number[]):void{
  //   arr.sort();
 //   }
 //}
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// const coinkind=Number (prompt ("enter your coin type:  "));
try {
    const fileData = fs_1.default.readFileSync(path_1.default.resolve("text.txt"), "utf8");
    let linesArray = fileData.split("\n");
    let parsedLinesArray = [];
    for (let i = 0; i < linesArray.length; i++) {
        linesArray[i] = linesArray[i].substring(0, linesArray[i].length - 2);
    }
    console.log(linesArray);
}
catch (err) {
    console.log(err);
}
// const dollar =3.34;
// const auro=3.69;
// const pzo=0.019;
// const pound = 4.18;
// const yen=0.026;
// const getrate= (coin:string):number => {
//     switch(coin)
//     {
//     case "dollar":
//         return dollar;
//     case "auro":
//         return auro;
//     case "pzo":
//         return pzo;
//     case "pound":
//         return pound;
//     case "yen":
//         return yen;
//     default:
//        return 0;
//     }
// }
// const convertkind=Number (prompt ("enter the coin type you want to convert to:  "));
// const moneyconvert=Number (prompt ("enter how much money you want to convert: "));
