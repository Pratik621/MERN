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

function reverse(sce){
    store=""
   for(let i=sce.length-1;i>=0;i--){ 
       store+=sce[i];
   }
   console.log(store);
}

   function inBuild(sce){ 
        let newSce=sce.split("").reverse().join("")
        console.log(newSce);
   }
   

reverse("Hello Pratik!")
inBuild("Hello Pratik!")

function countWords(sce){ 
    let count=0;
   sce= sce.trim();
    // console.log(sce);
    for(let i=0;i<sce.length;i++){
        if(sce[i]===" ") count++;
    }
    console.log(count+1)
}
countWords("    Hello Microsoft       ");

function plaindrome(sce){ 
   sce=sce.toLowerCase();
   sce=sce.trim();
   let store="";
   for(let i=sce.length-1;i>=0;i--){
    store+=sce[i]
   }
  if(sce===store){
    console.log("Palindrome")
  }
  else console.log("Not a Plaindrome")
}
plaindrome("Madam")


function longestWord(str){ 
     let count=0;
let max=0
for(let i=0;i<str.length;i++){
    if(str[i]!==" "){
        count++
        if(max<count){
           max=count;
            
        }
    }
    else if(str[i]===" "){
        count=0;
    }
}
console.log(max)
}
longestWord("Hello My Name is Pratik");


function repeatWord(str2){ 


    
let obj={};
for(let i=0;i<str2.length;i++){
  
    let char=str2[i]
    if(obj[char]!==undefined){
        console.log(char);
        break;dr
    obj[char]=true;
}

}
repeatWord("Helo name is Pratik");

