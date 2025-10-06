let arr=[4,1,3,7,5]
let result=arr.sort((a,b)=>a-b)
console.log(result)


//Buuble Sort:=
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
        }
    }    
}
console.log(arr)


// let m=Math.max(...arr)
// // console.log(m)
// let result1=[];
// let array= new Array(m)
// let obj={}
// for(let i=0;i<array.length;i++){
//  obj[arr[i]]=((obj[arr[i]] || 0)+1)
// }
// console.log(obj)
// for(let x of obj){
//     console.log(obj[0])
// }
// console.log(result)

//Selection Sort
let arr2=[4,7,1,6,1,7,8,10]
function selectionSort2(arr){
    for(let i=0;i<arr.length;i++){
        let minIndex=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }
        if(minIndex!==i){
            [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
        }
    }
    return arr

}
console.log(selectionSort2(arr2))
