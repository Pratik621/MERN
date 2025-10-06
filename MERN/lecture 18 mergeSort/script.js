let a=[1,3,4,7,20]
let b=[2,9,12]
// let n=a.length;
// let m=b.length;
// let ans=[];
function mergeSort(a,b){
let ans=[],n=a.length,m=b.length
    
let i=0;
let j=0;
while(i<n && j<m){
    if(a[i]<b[j]){
        ans.push(a[i])
        i++;
    }
    else {
        ans.push(b[j])
        j++;
    }
}

while(i<n){
    ans.push(a[i]);
    i++;
}
while(j<m){
    ans.push(b[j])
    j++;
}
return ans
    
}
console.log(mergeSort(a,b))
let arr=[2,4,3,1,5,8,7,6]





function recursion(arr,low,high){
    if(low===high){
        return [arr[low]]
    }
   
    let mid=Math.floor((low+high)/2)
    let left=recursion(arr,low,mid)
    let right= recursion(arr,mid+1,high)
    let result= mergeSort(left,right)
   return result;
}
console.log(recursion(arr,0,arr.length-1))

