function getAverage(arr:number[]):number{
    let count:number = 0;
    let sum: number = 0;
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i];
        count++;
        
    }
   return (sum/count);
}
let num:number=0;
let arr :number[]=[];
while(num!=-1)
{
num=Number (prompt ("enter number"));
arr.push(num);
}
alert( getAverage(arr));
function getAmountOfPositive(arr:number[]):number{
     
}