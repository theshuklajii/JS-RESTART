//que 1: take object of std then print total and update the marks then agian print total

const student = {
    name: "aman",
    marks: [20, 15, 17, 18]
};

let total = (obj) => {
    sum = 0;
    for (let val of obj.marks) {
        sum += val;
    }
    return sum;
}
console.log(`the total marks is: ${total(student)}`);
student.marks.push(25);
console.log(`the total updated is: ${total(student)}`);

//que 2: filter adults and print their names
const guests = [
    { name: "aman", age: 18 },
    { name: "kushal", age: 10 },
    { name: "harsh", age: 20 },
    { name: "kunal", age: 19 },
    { name: "adarsh", age: 30 }
];

let adult = [];

for(let i=0; i<guests.length; i++){
    if (guests[i].age>=18){
        adult.push(guests[i]);
    }
}

let names = [] ;
for(let i=0; i<adult.length; i++){
    names.push(adult[i].name);
}
console.log(names);