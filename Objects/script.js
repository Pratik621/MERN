// const studentsObj={
//     name:"Raj",
//     age:24,
//    city:"Pune"
// }


// studentsObj.hobby="Singing"
// studentsObj.city="Nagpur"
// console.log(studentsObj)
// console.log("Age=>",studentsObj.age)




// const studentsObj={
//     name:"Raj",
//     age:24,
//    city:"Pune"
// }

// studentsObj.hobby="Singing"
// studentsObj.city="Nagpur"
// console.log(studentsObj)
// console.log("Age=>",studentsObj.age)
// console.log("City=>",studentsObj["city"])
// delete studentsObj.name
// console.log(studentsObj)
// studentsObj.name="Pratik"
// studentsObj.name="Kedar"
// console.log("age=>",studentsObj.age)
// console.log(studentsObj)

// ------------Output-------------------
// undefined
// { name: 'Raj', age: 24, city: 'Nagpur', hobby: 'Singing' }
// Age=> 24
// City=> Nagpur
// { age: 24, city: 'Nagpur', hobby: 'Singing' }
// age=> 24
// { age: 24, city: 'Nagpur', hobby: 'Singing', name: 'Kedar' }

// === Code Execution Successful ===

// ----------------------------------Nested Object In Array--------------
// const studentsObj={
//     name:"Kedar"
// }
// const studentObjArr=[
//     studentsObj,{
//         name:"Pratik",
//         age:24
//     }
// ]
// console.log(studentObjArr)

// Output===============>[ { name: 'Kedar' }, { name: 'Pratik', age: 24 } ]



// const classroom=[{name:"Kedar",age:24,gender:"Male",address:{
//     line1:"A wing",
//     city:"Pune",
//     houseNo:9
// }},
// {
//     name:"Ganesh",age:25,gender:"Male",address:{
//         line1:"M Wing",
//         city:"Mumbai",
//         house:"7"
//     }
// },
// {
//     name:"Laxmi",age:23,gender:"Female",address:{
//         line1:"C Wing",
//         city:"Pune",
//         houseNo:"17"
//     }
// },
// {
//     name:"Kartik",age:27,gender:"Male",address:{
//         line1:"D Wing",
//         city:"Mumbai",
//         houseNo:"4"
//     }
// }
// ]


// for(let i in classroom){
//     if(classroom && classroom[i].address && classroom[i].address.houseNo){
//     if(classroom[i].address.city==="Pune"){
//         console.log("Name=>",classroom[i].name,"  age=>", classroom[i].age,"HouseNo=>",classroom[i].address.houseNo)
        
//     }
// }

// }

// Output==========>Name=> Kedar   age=> 24 HouseNo=> 9
//                 Name=> Laxmi   age=> 23 HouseNo=> 17






// How much function call here------------------
// function quickSort(arr){
//     function partition(arr,low,high){
//         let pivot=arr[high];
//         let i=low-1;
//         for(let j=low;j<high;j++){
//             if(arr[j]<pivot){
//                 i++;
//                 [arr[i],arr[j]]=[arr[j],arr[i]]
//             }
//         }
//     [arr[i+1],arr[high]]=[arr[high],arr[i+1]]
//     return i+1
//     }
//     function sort(arr,low,high){
//         if(low<high){
//             let pi=partition(arr,low,high);
//             sort(arr,low,pi-1)
//             sort(arr,pi+1,high)
//         }
//     }
//     sort(arr,0,arr.length-1)
//     return arr
// }
// console.log(quickSort([1,5,7,5,3,78,43,21]))


// ---------------------Spread Operator---------------
// function addStudent(student,...newStudents){
//     for(let i of newStudents){
//         student.push(i)
//     }
//     console.log(student)
    
// }
// const student=["Pratik","Kedar"]
// addStudent(student,"Hritik","Om")

// output======>>>>>>>>>>  [ 'Pratik', 'Kedar', 'Hritik', 'Om' ]