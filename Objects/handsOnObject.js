let arr=[1,2,42,2,1,2,3,4,5]
console.log("Frequency Count")
let obj={};
for(let char of arr){
    obj[char]=(obj[char] || 0)+1
}
console.log(obj)

for(let key in obj){
    if(key && obj[key]){
        if(obj[key]===1)
            console.log(key,":",obj[key]);
        
    }
}

const student = {
    name: "Alice",
    age: 21,
    courses: ["Math", "Physics"],
    address: {
        city: "New York",
        zip: 10001
    }
};
Object(student).grade="A"
student.address.city="Los Angeles"
student.courses.push("Chem")
console.log("Object:",student)

const person = { name: "Alice", age: 25, city: "Paris" };
const{name,age,city}=person;
console.log(name)
