

function zigZag(arr){
    
    let store=""
for(let i=0;i<arr.length;i++){
    if(i%2===0){
        let j=0;
      while(j<arr[i].length){
        store+=arr[i][j]+" "
        j++
      }
    }
    if(i%2!==0){
        j=arr[i].length-1
        while(j>=0){
            store+=arr[i][j]+" ";
            j--
        }
    }
}
return store

}
console.log("zigZag:",zigZag([[1,2,3],
         [4,5,6],
         [7,8,9]]))


//==============boundry Travel==================
function boundryTravel(arr){
    let newArr=[]
   for(let i=0;i<arr.length;i++){
      newArr.push(arr[0][i])
   }
   for(let j=1;j<arr.length;j++) {
    newArr.push(arr[j][arr.length-1])
   }
   for(let k=arr.length-2;k>=0;k--){
    newArr.push(arr[arr.length-1][k])
   }
   for(let l=arr.length-2;l>0;l--){
    newArr.push(arr[l][0])
   }
   return newArr;
}
console.log("BoundryTravel:",boundryTravel([[1,2,3],[4,5,6],[7,8,9]]));


function booleanMatrix(arr){
let newArr=[];
for(let i=0;i<arr.length;i++){
   let matrix=false;
    for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]===1){
           matrix=true;
           break;
        }
    
    }
    newArr[i]=[]
      for(let j=0;j<arr[i].length;j++)
        {
            if(matrix){
            newArr[i].push(1)
        }
        else if(!matrix){
            newArr[i].push(0)
        }
    }
}
return newArr;
}
console.log(booleanMatrix([[1, 0, 0, 0],
[0 ,0 ,0 ,0],
[0 ,1 ,0 ,0],
[0 ,0 ,0 ,0],
[0 ,0 ,0 ,1]]));