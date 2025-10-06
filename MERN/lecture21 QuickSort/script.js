function sort(arr){
    let n=arr.length;
    let index=n-1
    let store=arr[n-1];
   
for(let i=n-2;i>=0;i--){
  if(store>arr[i]){
   let temp=arr[i+1]
   arr[i+1]=store;
   arr[index]=temp
 break;
  }
  }
return arr

}
let arr=[2,1,3,7,5,4]
console.log(sort(arr))






let index=0
function sorting(arr,index){
    let n=arr.length
    let store=arr[n-1]
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]<=store){
          
            [arr[i],arr[index]]=[arr[index],arr[i]]
              index++;
        }
    }
    return arr
}
let arr1=[2,7,3,5,1,4]
console.log("sorting:",sorting(arr1,index))








let arr2=[3,1,6,2,8,7,4]
function quickSort(arr){
    
    let n=arr.length-1;
    let pivot=arr[n];
     let pivotIndex=-1
    let ind=0
    let store=arr[n-1]
    
    for(let i=0;i<arr.length;i++){
          let isWap=false;
          if(arr[i]<=store){
            isWap=true;
            [arr[i],arr[index]]=[arr[index],arr[i]]
            ind=index;
            index++;
        }
    }

     return arr;
     
    
}
console.log(quickSort(arr2))



