// console.log("Hello Strings !")
// let str="abcdebca";
// let obj={};
// for(let char of str){
//     obj[char]=(obj[char] || 0)+1
// }
// for(let key in obj){
//     if(obj[key]===1){
//         console.log("First Non Repeating String:",key)
//         break;
//     }
// }

// let str="conerting to snake case"
// str=str.replaceAll(" ","_")
// console.log("snake case:",str)
// let store=""
// let str2="hello pratik here"
// let store2=""
// for(let i=0;i<str2.length;i++){
//     if(str2[i]===" "){
//         i++;
//         store2+=str2[i].toUpperCase()
         
        
//     }

//   else   store2+=str2[i]
// }
// console.log("converting to camel case:",store2)

// let str="madam";
// let n=str.length
// let isPal=true;
// for(let i=0;i<Math.floor(n/2);i++){
//     if(str[i]!==str[n-1-i]){
//       isPal=false;
//       break;
//     }
//     // isPal=true;
// }
// if(isPal){
//     console.log("Palindrome:True")
// }
// else if(!isPal)console.log("Palindrome: False")

// let str="a1!b2@c3#"
// let right=[]
// let mid=[];
// let left=[];

// for(let i=0;i<str.length;i++){
//     let ch=str[i]
//     if(ch>="a" && ch<="z" || ch>='A' && ch<="Z"){
//         right.push(ch)
//     }
//     else if(ch>="0" && ch<="9"){
//         mid.push(ch)
//     }
//     else left.push(ch)
// }
// let arr=[[...right],[...mid],[...left]]
// console.log(arr.flat().join(""));

let str="Hello World!";
let vowels="aeiouAEIOU";
let words=str.split(" ");
for(let i=0;i<words.length;i++){
   let word= words[i]
   let hasVowel=false;
   for(let j=0;j<word.length;j++){
    if(vowels.includes(word[j])){
        hasVowel=true;
        break;
    }
}
    if(hasVowel){
        console.log(word)
    }
   }

   //write a function to print all the palindromic substrings of a string 
   
 //All SubString Of Banana

let str2="banana"
function subString(str2,i=0,j=0,arr=[]){
    if(i>=str2.length){
       arr.push()
        return arr
    }
    if(j>=str2.length+1){
       return subString(str2,i+1,i+1,arr)
        
    }
    if(i!==j){
    arr.push(str2.slice(i,j))
    }
   return subString(str2,i,j+1,arr)
    
}
console.log(subString(str2))


let brackets="{{{}}}"
function validParenthesis(str,open=0,close=0,ind=0){
if(close<0){
    return "invalid Parenthesis"
}
if(ind===brackets.length){
    return 
}

for(let i=ind;i<str.length;i++){
  if(Parenthsisi(str[i])){
    open++
  }
  else{
    close++
  }
  if(open===close){
    console.log("valid")
  }
  else {
    console.log("invalid")
  }
}


}
function Parenthsisi(i){
  if(i==="{"){
    open++
  }
  else close--

}
validParenthesis(brackets)




