const details={
    "Name":"Pratik",
    "age":23,
     result: function(status){
        return `${this.Name} has ${status}`
     }
}
console.log("Hands On",details.result("Pass"))

let user2=[
    {name:"Ram",age:30},
    {name:"Hritik",age:23},
    {name:"Pratik",age:22}
  ];
user2.forEach((value)=>{
   return value.name=value.name.toUpperCase()
})
console.log(user2)

let user3=[
    {name:"Ram",age:30},
    {name:"Hritik",age:23},
    {name:"Pratik",age:22}
  ];
  let ans1=user3.filter((value)=>value.age<25)
  console.log(ans1)

  let nums1=[1,2,4,5,12,18,9]
  let ans2=nums1.filter((n)=>!(n%2))
  console.log(ans2)

  const students={
    "name":"Aditi",
    "age":21,
    greet:function(subject){
        return `hello ${this.name} she love ${subject}`
    }
  }
  console.log(students.greet("Maths"))

  let arr3=[1, 4, 9, 16]
  let ans3=arr3.map((value)=>value*value)
  console.log(ans3)
  
  let ans4=arr3.forEach((n)=>n*n)
  console.log(ans4)


  const std = [
  { name: "Alice", marks: [85, 90, 78] },   // Math, English, Science
  { name: "Bob", marks: [22, 30, 40] },
  { name: "Charlie", marks: [78, 45, 80] },
  { name: "David", marks: [30, 40, 38] },
  { name: "Eve", marks: [20, 47, 8] }
];
const result=std
.filter(x=>{
   return x.name
})
console.log(result)

