// que 1: double the numbers in an array
let a = [1,2,3,4,5];
let doubled_a = a.map((val)=>{
    return val*2;
});
console.log(`the doubled array is: ${doubled_a}`);

// que 2: filter adults
let aa = [12,15,18,20,25,30,35,40];
adults = aa.filter((val)=>{
    if(val>=18) return true;
})
console.log(`the adults are: ${adults}`);

//que 3: sum using reduce
let aaa = [1,2,3,4,5];
let sum = aaa.reduce((acc, val)=>{
    return acc+val;
},0);
console.log(`the sum of the elements is ${sum}`);

//que 4: frequency counter
let b = [1,1,2,2,2,3,4,4,4,4,4,5,5]
const freq={};
for (let item of b) {
  if (freq[item]) {
    freq[item] = freq[item] + 1;
  } else {
    freq[item] = 1;
  }
}
console.log(freq);

