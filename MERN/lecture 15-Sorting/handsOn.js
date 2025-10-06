let array=[10, 13, 14, 29, 37]
function selectionSort(array){
for(let i=0;i<array.length;i++){
    let minIndex=i;

    for(let j=i+1;j<array.length;j++){
        if(array[j]<array[minIndex]){
           minIndex=j
        }
    }
if(minIndex!==i){
   let temp=array[i];
   array[i]=array[minIndex];
   array[minIndex]=temp;
}

}
return array
}
console.log(selectionSort(array))

let array1=[4,6,5,2,1,7,0,9,8]
function bubbleSort(arr){
    for(let j=0;j<arr.length;j++){
    for(let i=0;i<arr.length-j-1;i++){
        if(arr[i]>arr[i+1]){
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
        }
    }}
    return arr
}
console.log(bubbleSort(array1))

let arr1=[2,4,6,7]
let arr3=[3,5,8]

function mergeSort(a,b){
    let i=0;
    let j=0;
    let ans=[]
    while(i<=a.length-1 && j<=b.length-1){
       
        if(a[i]<b[j]){
            ans.push(a[i])
            i++;
            // console.log(a[i])
        }
        else if(b[j]<a[i]) {
            ans.push(b[j])
            j++;
        }

       
    }
    while(i<a.length){
        ans.push(a[i]);
        i++
    }
    while(j<b.length){
        ans.push(b[j])
        j++
    }

    return ans
    
}
console.log(mergeSort(arr1,arr3))

let array2=[1,5,4,7,8,6,2]
 
function recursionMerge(array2,low,high){
    if(low==high){
        return [array2[low]]

    }
    let mid=Math.floor((low+high)/2)
    let left=recursionMerge(array2,low,mid)
    let right=recursionMerge(array2,mid+1,high)
    return mergeSort(left,right)

}
console.log("Using recusrion method:",recursionMerge(array2,0,array2.length-1))