let arr=[3,1,6,2,8,7,4]
function insertionSort(arr){
    let n=arr.length
    for(let i=1;i<n;i++){
     let ind=i-1;
     let firstElementOfUnsortedPart=arr[i];
     let indexToSort=0;
     for(let j=ind;j>=0;j--){
        if(arr[j]>firstElementOfUnsortedPart){
            arr[j+1]=arr[j];
        }
        else{
            indexToSort=j+1
            break;
        }
     }
     arr[indexToSort]=firstElementOfUnsortedPart;
     ind++;
    }
    return arr;
}
console.log(insertionSort(arr))
