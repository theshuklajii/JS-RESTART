console.log("this is the revision of array, functions and objects");

//Objects

const person = {
    name:  "sudhanshu shukla",
    id: "101",
    course: "BCA",
    introduce:  ()=>{
        console.log(`My name is ${this.name} and my id is ${this.id} and i am pursuing ${this.course}`)
    }
}

person.eyecolor= "black";
person.introduce();
let a = person;
console.log(a);
