const StdName = [];

let addStu = (Name,course,age)=>{
    StdName.push({Name, course, age});
}

addStu('sudhanshu', 'BCA', '21');
addStu('gaurav', 'BCA', '21');
addStu('prince', 'BCA', '22');
addStu('adarsh', 'BCA', '22');

console.log(StdName);