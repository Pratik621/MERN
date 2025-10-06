let array=[2,4,6,5,9,8,1,3];
function quickSort(arr){
let ind=-1
let index=0;
let n=arr.length-1;
let pivot=arr[n];
if(arr[index]===pivot){
    return arr
}
for(let i=0;i<arr.length;i++){
    if(arr[i]<=pivot){
        [arr[i],arr[index]]=[arr[index],arr[i]]
        ind=index;
        index++;
    }
}
let left=arr.slice(0,ind);
let right=arr.slice(ind+1,arr.length);
let ans1=quickSort(left);
let ans2=quickSort(right);
return [...ans1,pivot,...ans2]
}
// console.log([2,4,6,5,9,8,1,3])
console.log("Quick sort:",quickSort(array))


//==========Insertion Sort================

let array1=[3,1,6,2,8,7,4]
function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let current=arr[i];
        let prev=i-1;
        while(prev>=0 && arr[prev]>current){
            arr[prev+1]=arr[prev]
            prev--;

        }
        arr[prev+1]=current;
    }
    return arr
}
console.log("Insertion Sort",insertionSort(array1))

let array2=[5,7,6,3,2,1,9]
function selectionSort1(arr){
   
    let nextindex=-1
    for(let j=0;j<arr.length;j++){
         let indextoSwap=j;
        
    for(let i=j+1;i<arr.length;i++){
        if(arr[i]<arr[indextoSwap]){
            indextoSwap=i;
           
        }
    }
    [arr[j],arr[indextoSwap]]=[arr[indextoSwap],arr[j]]
   
}
    return arr;
}
console.log("Selaction sort",selectionSort1(array2))