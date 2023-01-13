// function getAverage(arr:number[]):number{
//     let count:number = 0;
//     let sum: number = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i];
//         count++;
        
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
//     let numb:number=0;
//     for (let i = 0; i < arr.length-1; i++) {
//         if(arr[i]>arr[i+1])
//         {
//             let num:number=0;
//             num= arr[i];
//             arr[i]=arr[i+1];
//             arr[i+1]=num;
//         }
        
//     }
    
// }
import fs from "fs";
import path from "path";
// const coinkind=Number (prompt ("enter your coin type:  "));

try{
    const fileData:string = fs.readFileSync(path.resolve("text.txt"), "utf8");
    let linesArray:string[] = fileData.split("\n");
    let parsedLinesArray = [];
    
    for (let i = 0; i < linesArray.length; i++) {
        linesArray[i] = linesArray[i].substring(0, linesArray[i].length - 2)        
        
    }
    
    console.log(linesArray);
}
catch(err){
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




