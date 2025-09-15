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
   
