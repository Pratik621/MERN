//  Map & Set



//example 1
const arr=[2,3,4,1,0,1,2,3,4,5,10];
const set=new Set(arr)
console.log(set)

//approch 2;

 const set2=new Set()
for(let i=0;i<arr.length;i++){
   set2.add(arr[i])
}
console.log(set2)

//Question :Find frequency of each element in the arr
let arr3 =[2,3,4,5,6,7,23,1,2,3,4,5,6,65,4,3,0]

// Question :Find intersection & union ===========> common element in both  arr is insertion and combination of both element is union
let arr4=[1,2,5,6], arr5=[2,5,6,3,1,3]  //=>>>>>>>>>>> insertion ====> [1,2,5,6]
                                         //=========>  union========> [1,2,3,4,5,6]

const unionArr=new Set([...arr4,...arr5])
                           
//       Intersection

let arr1=[1,2,3,4,5] , arr2=[6,5,4,7,8,3]
let intersection=[];
let arrSet=new Set(arr1)
for(let i=0;i<arr2.length;i++){
   if(arrSet.has(arr2[i]))
      intersection.push(arr2[i])
}
intersection=[...new Set(intersection)]
console.log(intersection);




function isAnagaram(a,b){
   if(a.length!==b.length) return false;
   const map=new Map();

   for(let char of a){
      map.set(char,(map.get(char)||0)+1)
   }
   for(let char of b){
      if(!map.has(char)) return false;
      map.set(char,(map.get(char)||0)-1)

   }

   for(let [key,val]  of map){
      if(val!==0) 
         return false;
      
   }
   return true
   
}
// console.log("isAnagram",isAnagaram("silent","listen"))


function call(stringARR,queries){
   
   
  
   for(let i=0;i<queries.length;i++){
    let store=""
      for(let j=0;j<stringARR.length;j++){
         
         // isAnagaram(stringARR[i],queries[j])
         if(isAnagaram(queries[i],stringARR[j])){
            store+=stringARR[j]+" ";
         }
         else {
            continue
         }
      }
      if(store.length===0) console.log(-1)
         
         else console.log(store)
   }
  
   

}
console.log(call(["cat", "tea", "pet", "tac", "act", "eat"],["cat","tca","eee","tea"]))




// function mapArr(n){
//    const map=new Map([n])
//    return map
// }
// console.log(mapArr([1,2,3,4]))

// function print(n){
//    for(let i=0;i<n.length;i++){
//       console.log(n[i])
//    }

// }
// console.log(print(["cat","tac"]))

function isAnagram(str1,str2){
  let map = new Map();
for(let char of str1){
   map.set(char,(map.get(char)||0)+1)
}
  for(let char1 of str2)
  {
   map.set(char1,(map.get(char1)||0)-1)
  }
  for(let [key,val] of map)
    if(val != 0){
      return false;
    }
  
  return true;
}
function allAnagrams(Arr,Array){
  for(let i=0;i<Arr.length;i++){
    let result = [];
    for(let j=0;j<Array.length;j++){
       if(isAnagram(Arr[i],Array[j])){
        result.push(Array[j]);
       }
    }
    if(result.length==0){
      console.log("-1");
    }
    else{
      console.log(result.sort().join(" "));
    }
  }
}

let Array=["cat", "tea", "pet", "tac", "act", "eat"]
let Arr=["cat","tca","eee","tea"]
allAnagrams(Arr,Array);
function gptAnagram(Arr,Array){
   const map=new Map();
   for(let word of Arr){
     key =word.split("").sort().join("")
     if(!map.has(key)){
      map.set(key,[])
     }
     map.get(key).push(word)
   
   // console.log(map)
   }
      for(let word of Array){
         key=word.split("").sort().join("")
         if(map.has(key)){
           console.log(map.get(key).sort().join(" "))
         }
         else {console.log("-1")}
      
   }
   console.log(map)
}
gptAnagram(Arr,Array)