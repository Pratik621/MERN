let arr=[1,6,8,7,9,5,3,11,5,88]
function insertionSorting(arr){
    let n=arr.length;
    for(let i=1;i<arr.length;i++){
        let prev=i-1;
        let current=arr[i];
        while(prev>=0 && arr[prev]>current){
            arr[prev+1]=arr[prev]
            prev--;
        }
        arr[prev]=current;
    }
    return arr
}
console.log("Insertion Sort:",insertionSorting(arr))


let array=[3,5,7]
let array4=[1,3,5,59];
function mergeSort(a,b){
    let result=[];
    let i=0,j=0
    while(i<a.length && j<b.length){
        if(a[i]<b[j]){
            result.push(a[i])
            i++;
        }
        else if(b[j]<a[i]){
            result.push(b[j]);
            j++
        }
        else if(a[i]==b[j]){
            result.push(a[i])
            result.push(b[j])
            i++
            j++
        }
    }
    while(i<a.length){
        result.push(a[i])
        i++
    }
    while(j<b.length){
        result.push(b[j])
        j++
    }
    return result
}
console.log("Merge Sort:",mergeSort(array,array4))

let arr5=[5,7,4,2,3,6,8,4];
function qucikSorting(arr){
   
    let n=arr.length-1
    let pivot=arr[n]
    let index=0
    let ind=0
     if(arr[index]===pivot){
        return
     }
    for(let i=0;i<arr.length;i++){
      if(arr[i]<=pivot){
        [arr[i],arr[index]]=[arr[index],arr[i]]
        ind=index;
        index++;
      }
      else {
        [arr[i],arr[index]]=[arr[index],arr[i]]
      }
    }
    let left=arr.slice(0,ind);
    let right=arr.slice(ind+1);
    qucikSorting(left);
    qucikSorting(right)
    return arr
}
console.log(qucikSorting(arr5))


let arr6=[4,5,6,7,3,9,1]
function selectionSort(arr){
    
    let index=0
for(let i=0;i<arr.length;i++){
    let minIndex=i;
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[minIndex]){
            minIndex=j
        }
    }
    [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]

}
return arr

}
console.log("Selection Sort",selectionSort(arr6))