// Factorial
// function factorial(n){
//     if(n<0) return -1
//     if(n===0) return 1
//     fact=n*factorial(n-1)
//     return fact;
// }
// console.log(factorial(5))

function print1toN(N){
    if(N==0) {
        return 
    }
    
    print1toN(N-1);
   console.log(N)
}
print1toN(5)

function printNto1(N){
    if(N===0){
        return 1
    }
    console.log("Print N to 1",N)
    printNto1(N-1)
}
printNto1(5)

function SumofNumber(n){
    if(n<=0) return 0
    if(n==1) return 1
    return n+(SumofNumber(n-1))
}
console.log("Sum Of Natural Number:",SumofNumber(5))

// function gcd(n,m){
      

     

// }
// console.log(gcd(8,32))



function gcd(i,j){

while(i!=0){
let temp=i;
i=j%i
j=temp
  }
return j

}
console.log(gcd(15,25))

//=============Recursion =================

function recursionGcd(a,b){
  if(a===0) return b 
  return recursionGcd(b%a,a)
}
console.log(recursionGcd(15,25))


let arr=[27,12,18,24,30]
let gcdArr=0;
for(let i=0;i<arr.length;i++){
    gcdArr=gcd(gcdArr,arr[i])
}
console.log(gcdArr)

function findPower(a,b){
    if(b===1) return a
    return   a*findPower(a,b-1)

}
console.log(findPower(2,3))

function binaryExponentia(a,n){
    if(n===0) return 1
    if(n===1) return a
    let temp=binaryExponentia(a,Math.floor(n/2))
    return temp*temp*a**(n%2)
}
console.log(binaryExponentia(2,10))


 
  for (let word of StringArray) {
    let key = word.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, word); 
    } else {
   
      map.set(key, map.get(key) + " " + word);
    }
  }
  console.log(map)
  

  
  for (let query of Arr) {
    let key = query.split("").sort().join("");
    if (map.has(key)) {
      
      let result = map.get(key).split(" ").sort().join(" ");
     
    } else {
      console.log(-1);
    }
  }

  


