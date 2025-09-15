// Question Binary Square Root 

let N=36;
function squareRoot(){
let low=0;
let high=N;
while(low<=high){
    let mid=Math.floor((low+high)/2)
    let midSquare=mid*mid;
    if(midSquare===N){
        return mid
    }
    else if(midSquare>N){
        high=mid-1
    }
    else {
        low=mid+1;
    }

}
return -1
}
console.log(squareRoot(N))

//Question 2 find a target element in a  sorted array and print its index;
let arr=[1,2,3,4,5,6,11,10]
let index=arr.length-1;
let t=11;
function printTargetIndex(arr){
low=0;
high=arr.length-1;
while(low<=high){
    let mid=Math.floor((low+high)/2)
    if(arr[mid]===t){
        return mid;
    }
    else if(arr[mid]>t){
        high=mid-1;
       
    }
    else {
        low=mid+1;
      
    }

}
return -1;
}
console.log(printTargetIndex(arr))


// question 3 find first Occurence Of target Element
let a=[1,2,6,6,13,12,34,10];
let t1=6;
let index1=arr.length
function printFirstIndex(a){
    let low=0;
    let high=a.length-1;
   
    while(low<=high){
        let mid=Math.floor((low+high)/2)
        if(a[mid]>=t1){
            index=mid;
            high=mid-1;
        }
        else low=mid+1;
       

    }

return index;
}
console.log(printFirstIndex(a))




