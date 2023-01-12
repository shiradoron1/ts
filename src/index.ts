function getAverage(arr:number[]):number{
    let count:number = 0;
    let sum: number = 0;
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i];
        count++;
        
    }
   return (sum/count);
}
// let num:number=0;
// let arr :number[]=[];
// while(num!=-1)
// {
// num=Number (prompt ("enter number"));
// arr.push(num);
// }
// alert( getAverage(arr));
function getAmountOfPositive(arr:number[]):number{
    let co:number=0;
     for (let i = 0; i < arr.length; i++) {
        if(arr[i]>0)
        {
            co++;
        }
        
     }
     return co;
}
let num:number=0;
let arr :number[]=[];
while(num!=-1)
{
num=Number (prompt ("enter number"));
arr.push(num);
}
alert( getAmountOfPositive(arr));
function sortList(arr:number[]):void{
    let numb:number=0;
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i]>arr[i+1])
        {
            let num:number=0;
            num= arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=num;
        }
        
    }
    
}