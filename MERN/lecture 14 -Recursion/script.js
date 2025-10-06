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



// function gcd(i,j){

// while(i!=0){
// let temp=i;
// i=j%i
// j=temp
//   }
// return j

// }
// console.log(gcd(15,25))

// //=============Recursion =================

// function recursionGcd(a,b){
//   if(a===0) return b 
//   return recursionGcd(b%a,a)
// }
// console.log(recursionGcd(15,25))


// let arr=[27,12,18,24,30]
// let gcdArr=0;
// for(let i=0;i<arr.length;i++){
//     gcdArr=gcd(gcdArr,arr[i])
// }
// console.log(gcdArr)

// function findPower(a,b){
//     if(b===1) return a
//     return   a*findPower(a,b-1)

// }
// console.log(findPower(2,3))

// function binaryExponentia(a,n){
//     if(n===0) return 1
//     if(n===1) return a
//     let temp=binaryExponentia(a,Math.floor(n/2))
//     return temp*temp*a**(n%2)
// }
// console.log(binaryExponentia(2,10))


 
//   for (let word of StringArray) {
//     let key = word.split("").sort().join("");

//     if (!map.has(key)) {
//       map.set(key, word); 
//     } else {
   
//       map.set(key, map.get(key) + " " + word);
//     }
//   }
//   console.log(map)
  

  
//   for (let query of Arr) {
//     let key = query.split("").sort().join("");
//     if (map.has(key)) {
      
//       let result = map.get(key).split(" ").sort().join(" ");
     
//     } else {
//       console.log(-1);
//     }
//   }

  // given a paretnthesis sequesnce determine if its valid or not

  let s1="()()(())"
  let s2=")("
  let s3= "())(())"
  let x=0;
  let open=0
  let count=0
  function paretnthesisSeq(s2,x,open){
    
      if(x===s2.length) return count===0?"valid":"not valid"
      
      if(isOpen(s2,x,open)){
      
        count++
       return paretnthesisSeq(s2,x+1,open)
        

      }
      else {
        
        count--
        return paretnthesisSeq(s2,x+1,open)
      }
  }
  function isOpen(s2,x,open){
     if(s2[x]==='('){
      open++
      return true;
     }
     else {
      open--
      return false
     }
     
  }
  console.log("Is Parenthesis valid:",paretnthesisSeq(s2,x,open))




 let ans=[]
  function generateBractes(n,str="",index=0,open=0,close=0){
     if(open<close){
      return
     }
     if(index===n){
      if(open == close){
        ans.push(str)
      }
      return 
     }
    generateBractes(n,str+="(",index+1,open+1,close)
    generateBractes(n,str+=")",index+1,open,close+1)
    // time complexity=O(2^n)
    // Space Complexity=O(N)
  }

  generateBractes(6)
  console.log({ans});

  let ans1=[]
  function genrateCurveBractaes(n,str="",index=0,open=0,close=0){
    
            if(open<close){
              return 
            }
            if(n===index){
              if(open==close)
                {
                  ans1.push(str)
                }
              return 
            }
            genrateCurveBractaes(n,str+"{",index+1,open+1,close)
            genrateCurveBractaes(n,str+"}",index+1,open,close+1)
  }
  genrateCurveBractaes(6)
  console.log("curl Blacets:",{ans1})
  




let allValidParenthesis = [];

/* Time Complexity: O(2^N) */
/* Space Complexity: O(N) */
function generateParenthesis(n, str = "", ind = 0, open = 0) {
  /* this means the string contains invalid combination
  as there's no opening bracket for last closing bracket */
  if (open < 0) {
    return;
  }

  if (ind == n) {
    if (open == 0) {
      allValidParenthesis.push(str);
    }
    return;
  }

  generateParenthesis(n, str + "(", ind + 1, open + 1);
  generateParenthesis(n, str + ")", ind + 1, open - 1);
}

generateParenthesis(6);
console.log({ allValidParenthesis });






let store=[]
function swapping(str,i,j){
let array=str.split("");
[array[i],array[j]]=[array[j],array[i]]
return array.join("")
}

function permitation1(str,index=0){
  if(index===str.length-1){
    store.push(str)
    return 
  } 
    for(let i=index;i<str.length;i++){
     let swpped= swapping(str,index,i)
     permitation1(swpped,index+1)
       
    }
}


permitation1("abc")
console.log({store})

