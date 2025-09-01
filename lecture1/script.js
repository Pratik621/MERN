// function greet(){
//     console.log("Hello World!")
// }


// function greet2(){
//     console.log("Bye WOrld!")
// }

// greet()
// greet();
// greet2();
// greet()
// greet2();
// greet()

// function greetUser(firstName,lastName){
//     console.log(`Hello!! ${firstName},Wellcome to ${lastname}`)
// }
// greetUser("Rani")
// greetUser("Pratik,Mane")

// ------------------------------------Nested Function //---------------------

// function personalDetail(name,birthYear){
//   console.log("Name="+name);
//   console.log("Age="+calculateYear(birthYear))

// }
// function calculateYear(birthYear){
//     return 2025-birthYear
// }
// personalDetail("pratik",2002)

//--------------------------------------------------Array---------------------------
// const students=["pratik","puneet","hritik","rani"];
// console.log("Roll no"+students.indexOf("puneet ,")+"name="+students[1])

// const ipl=["MI","CSK","SRH","KKR","GT"];
// for(let i=0;i<ipl.length;i++){
//     if(ipl[i]==="KKR"){
//         ipl[i]="LSG"
//     }
// }console.log(ipl)

//--------------------------------------------Using Include---------------------------------------------------
// const ipl=["MI","CSK","SRH","KKR","GT"];
// if(ipl.includes("CSK")){
//     ipl[CSKINDEX]=="LSG"
// }
// console.log(ipl)
// let num=5;
// let fact=1
// for(let i=num;i>=1;i--){
//     fact=fact*i
// }
// console.log(fact)

console.log("hello")
console.log("Nilesh")

//-----------------------------------------------------Nested Array-----------------------------------------
// let arr=[1,[1,2,3],4,5,[6,95,71],80]
// let empty=[];
// let empty2=[]
// for(let i=0;i<arr.length;i++){
//     if(typeof arr[i]==="number"){   // we can also do it with (arr[i].length===undefined) length of number is undefined
//         empty.push(arr[i])
        
//     }
//     else {
//         for(let j=0;j<arr[i].length;j++){
//             empty2.push(arr[i][j])
            
//         }
//     }
   
// }
//  console.log(empty.join(" "))
//  console.log(empty2.join(" "))



// function checkMatrix(arr){
    // let flag=true
    // for (let i=0;i<arr.length;i++){
        
    //         if(arr[0].length==arr[i].length && arr.length!==1){
    //             flag=true;
    //         }
    //         else if(arr.length===1){
    //             flag=false
    //         }
        
    // }
    // if(flag){
    //     console.log("true")
    // }
    // else{
    //     console.log("false")
    // }
    
//     const result=arr.filter(x=>arr[0].length===arr[x].length?true:false)
// }

// checkMatrix([[1,2,3],[2,3,4]])



// function producSumOfRow(arr){
// let prevSum=1;
// for(let i=0;i<arr.length;i++)
// {
// let sum=0;
// for(let j=0;j<arr[i].length;j++)
// {
// sum=sum+arr[i][j];
// }
// // console.log(sum)

// prevSum=prevSum*sum;

// }
// return prevSum;
// }
// console.log(producSumOfRow([[1,2,3],[4,5,6],[7,8,9]]));

//sum of subarray
// let arr=[[1,2,3],[4,5,6]]
// for(let i=0;i<arr.length;i++){
//     let sum=0;
//     for(let j=0;j<arr[i].length;j++){
//         sum+=arr[i][j]
//     }
//     console.log(sum)
// }


//------------------------------------------------creating sub array--------------------------------------------
// let arr=[1,2,3,4,5]
// for(let i=0;i<arr.length;i++){
//     let empty=[]
//     for(let j=i;j<arr.length;j++){
//        empty.push(arr[j])
//         console.log(empty)
//     }
   
// }

//------------------------------------------------TRIPLET-------------------------------------------------------
/**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function(nums) {

// nums.sort((a,b)=>a-b)
// let ans=[];
// for(let i=0;i<nums.length;i++){
//     if(i>0 && nums[i]===nums[i-1])continue;

//     let left=i+1;
//     let right=nums.length-1

//     while(left<right){
//         let sum=nums[i]+nums[left]+nums[right];
//         if(sum===0){
//             ans.push([nums[i],nums[left],nums[right]])
//             left++;
//             right--;

//             while(left<right && nums[left]===nums[left-1])left++
//             while(left<right && nums[right]===nums[right+1])right--;
//         }
//         else if(sum<0){
//             left++
//         }
//         else {
//             right--;
//         }
//     }
// }
// return ans
    
// };

//--------------------------------------------------------Multiply by string to num----------------
// let value=4+("10"*" ")/27;
// console.log({value})    // value:4
// let value2=4*" ";
// console.log({value2})  // valuse2:0


//---------------------------------Primary Diagonal Matrix---------------------------------
// const arr=[[1,2,3],[4,5,6],[7,8,9]]
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     // for(let j=i;j<=i;j++){
//     //     sum+=arr[i][j]
//     // }
//     sum+=arr[i][i]           //best solution 
    
// }
// console.log(sum)  //TC=0(n) SC=

//----------------------------Home Work-----------------------------------------------

// let arr=[
//   [1, 2, 3, 4, 5, 6],
//   [2, 6, 12, 43, 3, 5],
//   [8, 10, 34, 23, 12, 8],
// ];

// Output =====>
// [
//   [1, 10, 3, 23, 5, 8],
//   [2, 6, 12, 43, 3, 5],
//   [8, 2, 34,  4, 12, 6],
// ];
// let empty=[[],[],[]];

// let rows=arr[0].length;
// let j
// let m
// let cols=arr.length;
// for(let i=0;i<rows;i++){
//     if(i%2===0){
//        j=0 ;
//        m=2;
//        empty[0].push(arr[j][i])
//        empty[2].push(arr[m][i])
       
//     }
//     else if(i%2!==0){
//         j=2;
//         m=0;
//         empty[0].push(arr[j][i])
//         empty[2].push(arr[m][i])
//     }
// }
// empty[1].push(arr[1])
// console.log(empty)



//------------------------- Use of SLICE and SPLICE-----------------------------------------
// let arr=[1,2,3,4,9]
// let empty=[]
// for(let i=0;i<arr.length-1;i++){
//     empty.push(arr[i])
// }
// console.log(empty)
// sliced=arr.slice(0,arr.length-1)
// console.log(sliced)

// arr.splice(arr.length-1,1)
// console.log(arr)

// console.log("hello")




//-----------------------------------Shifting of array----------------------------------------

// let arr=[10,20,30,40,50], size=5
// store=arr[arr.length-1]
// for(let i=arr.length-1;i>=0;i--){
//     arr[i]=arr[i-1]
// }
// arr[0]=store

// console.log(arr)                  OUTPUT=>[ 50, 10, 20, 30, 40 ]

// let arr=[10,20,30,40,50], size=5
// store=arr[0]
// for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i+1]
// }
// arr[arr.length-1]=store


// console.log(arr)                  OUTPUT=>[ 20, 30, 40, 50, 10 ]


//----------------------------Shifting of elements of array up to k;
// let arr=[10,20,30,40,50], k=2;
// for(let i=0;i<k;i++){
//     let store=arr[i-i]
//     // console.log(store)
//     for(let j=0;j<arr.length-1;j++){
//         arr[j]=arr[j+1]
//     }
    
//     arr[arr.length-1]=store
//     //console.log(arr)
// }
// console.log(arr)                OUTPUT=>[ 30, 40, 50, 10, 20 ]

//---------------------------------------Print SubArray of size K---------------------------


// let arr2=[1,2,-3,0,1,-1,1]
// function printSubArrayofSizeK(arr,k){
//     let empty=[]
//     for(let i=0;i<=arr.length-k;i++){
        
//     //   for(let j=i;j<arr.length;j++){
//         //   if(i+k===k+i){
//               empty.push(arr.slice(i,i+k))
//         //   }
//     //   }
//     }
//     return empty
// }
// console.log("Time Complexity =>O(n)     "+"Space Complexity=>O(1)")


// console.log(printSubArrayofSizeK(arr2,3))


//---------------------------Frequency of Number----------------
// let arr=[1,2,3,1,1,3]
// let freq={}
// for(let num of arr){
//     freq[num]=(freq[num]||0)+1    <---------------Important
// }
// console.log(freq)
// for(let keys in freq){
//     if(freq[keys]===1){
//         console.log(Number(keys))
//     }
// }


 






