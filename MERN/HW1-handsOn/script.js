let array = [2, 5, 8, 12, 16, 23,,23,23, 38, 56]
let target = 23
let low=0;
let high=array.length-1
let index=-1

function binary(array){
while(low<=high){
    let mid=Math.floor((low+high)/2)
    if(target>=array[mid]){
       index= mid
       low=mid+1
    }
    else {
        high=mid-1
    }
   
    
}
return index
}
console.log("Binary Search:",binary(array))

let n=101101
let decimal=0
function binaryToDecimal(n){
    let m=n+""
for(let i=0;i<m.length;i++){
      if(m[i]=="1"){
        decimal+=Math.pow(2,i)
      }
}
return decimal
}
console.log("Binary to Decimal:",binaryToDecimal(n))
console.log("inbilt function:'parseInt:-'",parseInt(n,2))
let int=10;
console.log("Decimal to binary:'inbuilt function'",int.toString(2))

let num=36
let str=""
let result=""
while(num>0){
   str=num%2+str
   num=Math.floor(num/2)
}
result+=str||0
console.log("Decimal to Binary:",result)

/*Write a recursive function to generate all subsets (the power set) of a given array.

Example:
Input: [1, 2]
Output: [[], [1], [2], [1, 2]]*/
let arr=[[],]

function subset(arr){
    let result=[];

    function backtrack(index,current){
      if(index===arr.length){
        result.push([...current])
        return;
      }
    
    backtrack(index+1,current);
    current.push(arr[index])
    backtrack(index+1,current)
    current.pop()
    }
    backtrack(0,[])
    return result
}
console.log(subset([1,2]))


//Nqueen


function nQueen(n) {
  let board = Array.from({ length: n }, () => Array(n).fill("."));
  let solution = [];

  function isSafe(board, row, col) {
    // check column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }

    // check upper-left diagonal
    for (let x = row - 1, y = col - 1; x >= 0 && y >= 0; x--, y--) {
      if (board[x][y] === "Q") return false;
    }

    // check upper-right diagonal
    for (let x = row - 1, y = col + 1; x >= 0 && y < n; x--, y++) {
      if (board[x][y] === "Q") return false;
    }

    return true;
  }

  function backtrack(row) {
    if (row === n) {
      solution.push(board.map(r => r.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(board, row, col)) {
        board[row][col] = "Q";
        backtrack(row + 1);
        board[row][col] = ".";
      }
    }
  }

  backtrack(0);
  return solution;
}

console.log(nQueen(4));

function printAlphabets(n){
  console.log("A")
  for(let i=1;i<n;i++){
    let empty=[]
    for(let j=0;j<=i;j++){
      let char=64+j+i
      empty.push(String.fromCharCode(char))
    }
    console.log(empty.join(""))
  }
}
printAlphabets(5)

function hollowDimod(n){
 for(let i=1;i<=n;i++){
  let space=""
  for(let j=n;j>i;j--){
    space+=" "
  }
  let star=""
  for(let k=1;k<=2*i-1;k++){
    if(k===1 || k===2*i-1){
    
      star+="*"}
      else star+=" "
      
  }
  console.log(space+star)
 }
  
 for(let i=n-1;i>=1;i--){
  let space=""
  for(let j=n;j>i;j--){
    space+=" "
  }
  let star=""
  for(let k=1;k<=2*i-1;k++){
    if(k===1 || k===2*i-1){
    
      star+="*"}
      else star+=" "
      
  }
  console.log(space+star)
 }
}

hollowDimod(5)

function longestString(str){
 
  let max=0
  let str1=""
  for(let i=0;i<str.length;i++){
     const map=new Map()
    let arr=[]
    
    for(let j=i;j<str.length;j++){
      if(!map.has(str[j])){
        map.set(str[j])
        arr.push(str[j])
      }
      else break;

    }
    if(max<arr.length)
    {
       max=arr.length
       str1=arr
       
    }
  }
  console.log(`Longest Substring with non repeating : ${str1.join("")} : ${max}`)

}
longestString("abbcda")



function diagonalTransversal(matrix){
let m=matrix.length;
let n=matrix[0].length;
let result=[]
for(let d=0; d<n+m-1;d++){
  let row=d<m?0:d-m+1
  let col=d<m?d:m-1

  while(row<n && col>=0){
    result.push(matrix[row][col])
    row++;
    col--;
  }
}
return result;

}
console.log(diagonalTransversal([[1,2,3],[4,5,6],[7,8,9]]))









