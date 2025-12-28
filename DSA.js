//Que 1: reverse a array

const a = [1,2,3,4,5];
let reversedArray = (a)=>{
    reversedArray=[];
    for(let i = a.length-1; i>=0; i--){
        reversedArray.push(a[i])
    }
    return reversedArray;
}
console.log(`reversed array is: ${reversedArray(a)}`);