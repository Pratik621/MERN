/* Higher Order Functions*/
let arr1=[1,2,3,4,5];
function sumFunction(arr){
    let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
}
return sum
}
console.log(sumFunction(arr1))



//=========================Reduce ===================
let arr=[2,5,3,10,34]
let count=0;
let sum2=arr.reduce((acc,b)=>acc+b,0)
console.log(sum2)


let even=arr.reduce((accumulator,val,index,array)=>{
    accumulator+=val%2==0;
    return accumulator
},0)
console.log(even)



let fruits=["Apple","guva","kiwi","bannana","apple","kiwi"]
let freq=fruits.reduce((accumulator,val,index,array)=>{
     accumulator[val.toLowerCase()]=(accumulator[val.toLowerCase()]||0)+1
     return accumulator
},{})
console.log({freq})



//================Find()==================
// return a value
// returns the first element that matches the condition

// Home Work
let findsKiwi=fruits.find((val,index,array)=>val.toLowerCase()=="kiwi")
console.log(findsKiwi)

//given an array of objects,containing details of users,console the name of first user above 30

const user=[{name:"Alice",age:25},{name:"pratik",age:32},{name:"kedar",age:28}]
let findUser=user.find((val,index,array)=>val.age>30)
console.log(findUser)


/* function to create an array of names from above user*/
// let newArr=[];
let name=user.map(a=>{
    if(a.name){
      return a.name
    }
})
console.log("name:",name)





// print only names of active users
const user1=[{name:"Alice",age:25,isActive:true},
    {name:"pratik",age:32,isActive:false},
    {name:"kedar",age:30,isActive:true}]

let newArr2=user1
.filter(a=>a.isActive)
.map(a=>a.name)    

console.log("Only Name",newArr2)



// sum of age <30
let sum3=user1
.filter(a=>a.age<=30)
.map(a=>a.age)
.reduce((a,b)=>a+b,0)
console.log("Sum of Age:",sum3)







//===========Passing  a Function as an arguments and returning a function

function calculatore(a,b,operation){
    return operation(a,b)
}
function multiply(a,b){
    return a*b;

}
function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b;
}
console.log("Calculate:",calculatore(3,4,multiply))


//==================Error Hanling================
try{
    let student="Pratik"
}

