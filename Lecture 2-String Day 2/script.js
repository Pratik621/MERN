//------------------Strings--------------------
// function  variable(scentence){
//     function camelCase(scentence){
//         let store="";
//         if(scentence.length<=1) return scentence;
//           for(let i=0;i<scentence.length;i++){
//            if(scentence[i]===" "){
//             i++;
//             store+=scentence[i].toUpperCase();
//            }

//          else  store+=scentence[i];
            
//           }
//           return store;
//     }

//     function snakeCase(scentence){
//         let store="";
//         for(let i=0;i<scentence.length;i++){
//             if(scentence[i]===" "){
                
//                 store+="_";
//             }
//             store+=scentence[i];
//         }
//         return store;

//     // can also use inbuild function => return trim().replaceAll(" ","_");
        
//     }
//    return {
//         camel:camelCase(scentence),
//         snake:snakeCase(scentence)
//     }
   
// }
// console.log(variable("student first name"));
// console.log("TimeComp:","O(n)","SpaceComp:",("O(1)"));

// function reverse(sce){
//     store=""
//    for(let i=sce.length-1;i>=0;i--){ 
//        store+=sce[i];
//    }
//    console.log(store);
// }  Z

//    function inBuild(sce){ 
//         let newSce=sce.split("").reverse().join("")
//         console.log(newSce);
//    }
   

// reverse("Hello Pratik!")
// inBuild("Hello Pratik!")

// function countWords(sce){ 
//     let count=0;
//    sce= sce.trim();
//     // console.log(sce);
//     for(let i=0;i<sce.length;i++){
//         if(sce[i]===" ") count++;
//     }
//     console.log(count+1)
// }
// countWords("    Hello Microsoft       ");

// function plaindrome(sce){ 
//    sce=sce.toLowerCase();
//    sce=sce.trim();
//    let store="";
//    for(let i=sce.length-1;i>=0;i--){
//     store+=sce[i]
//    }
//   if(sce===store){
//     console.log("Palindrome")
//   }
//   else console.log("Not a Plaindrome")
// }
// plaindrome("Madam")


// function longestWord(str){ 
//      let count=0;
// let max=0
// for(let i=0;i<str.length;i++){
//     if(str[i]!==" "){
//         count++
//         if(max<count){
//            max=count;
            
//         }
//     }
//     else if(str[i]===" "){
//         count=0;
//     }
// }
// console.log(max)
// }
// longestWord("Hello My Name is Pratik");


// function repeatWord(str2){ 


    
// let obj={};
// for(let i=0;i<str2.length;i++){
  
//     let char=str2[i]
//     if(obj[char]!==undefined){
//         console.log(char);
//         break;dr
//     obj[char]=true;
// }

// }
// repeatWord("Helo name is Pratik");
// }


//==================Ptice Module=======================

function ptice(n,key){
    let ardianCount=0;
    for(let i=0;i<key.length;i++){
        if(key[i]==="A"){
            ardianCount++;
            i++
        }
        else i++;
        if(key[i]==="B"){
            ardianCount++;
            i++
        }
        else i++;
        if(key[i]==="C"){
            ardianCount++;
            i++;
        }
        else i++
    }
    let brunoCount=0;
    for(let i=0;i<key.length;i++){
        if(key[i]==="B"){
            brunoCount++;
            i++;
        }
        else i++;
        if(key[i]==="A"){
            brunoCount++;
            i++;
        }
        else i++;
        if(key[i]==="B"){
            brunoCount++;
            i++
        }
        else i++;
        if(key[i]==="C"){
            brunoCount++;
            i++
        }
        

    }
    let goranCount=0;
    for(let i=0;i<key.length;i++){
        if(key[i]==="C"){
        goranCount++;
        i++

        }
        else i++;
        if(key[i]==="C"){
            goranCount++;
            i++
        }
        else i++;
        if(key[i]==="A"){
            goranCount++;
            i++
        }
        else i++;
        if(key[i]==="A"){
            goranCount++;
            i++
        }
        else i++;
        if(key[i]==="B"){
            goranCount++;
            i++
        }
        else i++;
        if(key[i]==="B"){
            goranCount++;
            i++
        }
    }
    console.log(Math.max(ardianCount,brunoCount,goranCount))



}
ptice(5,"AAAABBBBB")

/*
Do you like this question ?
Question
hard
Max Score: 50
Palindrome pair
Given a string of length N. You have to select two non-overlapping (no common index) non-empty substrings of odd lengths from that string such that both those substrings are palindrome. You want the product of lengths of that substring to be maximum.

Input Format
The first line of input contains string s. The second line of input contains the string t.

Output Format
Print a single integer which is the maximum possible product of lengths of selected substrings.

Example 1
Input

aabaaba
output

9
Explanation

we can select substring [2-4] = aba and [5-7] = aba the product of their lengths is 9
Example 2
Input



output

15
*/



