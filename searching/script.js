let empty=[];
for(let i=1;i<=100;i++){
empty.push(i)
}
console.log(empty)

let arr=[1,2,4,4,6,6,6,8]
let m=arr.length-1;
for(let i=0;i<arr.length;i++){
    if(arr[i]===6){
        console.log(i);
        

        
    }
    if(arr[m]===6){
        console.log(m)
        m--
    }
}



