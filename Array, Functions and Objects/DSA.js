//Que 1: reverse a array

const a = [1,2,3,4,5];
let reversedArray = (a)=>{
    result=[];
    for(let i = a.length-1; i>=0; i--){
        result.push(a[i])
    }
    return result;
}
console.log(`reversed array is: ${reversedArray(a)}`);

// Que 2: find max in array

const b = [1,5,3,9,2,56,89,7];
let maximum = (b)=>{
    let max=b[0];
    for(let i=0; i<=b.length-1; i++){
        if(b[i]>max){
            max=b[i];
        }
    }
    return max;
}
console.log(`max in array is: ${maximum(b)}`);