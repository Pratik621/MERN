// Lower bond
let arr=[1,2,3,5,5,7,9]
let target=5
function lowerBond(arr,target){
let low=0;
let high=arr.length-1;
let index=arr.length;

while(low<=high){
    let mid=Math.floor((low+high)/2);
    if(arr[mid]>=target){
        index=mid;
        high=mid-1;
    }
    else  low=mid+1;
}
return index
}
console.log(`lower bond for ${target} is `,lowerBond(arr,target))



const arr2=[1,2,3,3,4,6,7];
let target1=5;
function upperBond(arr2,target1){
let low=0;
let index=arr2.length
let high=arr2.length-1

while(low<=high){
    let mid=Math.floor((low+high)/2);
    if(arr2[mid]<=target1){
      index=mid;
      low=mid+1;
    }
    else high=mid-1;
}
return index+1;
}
console.log(`upper bond for ${target1} is`,upperBond(arr2,target1))


//simple searching;
const arr3 =[1,2,3,4,5,6,7,8]
let target2=5;
let low=0;
let high=arr.length-1;
function simpleSearching(arr3,target2){
    while(low<=high){

    let mid=Math.floor((low+high)/2)
    if(arr3[mid]===target2){
        return mid
    }
    else if(arr[mid]>target){
       high=mid-1
    }
    else low=mid+1;
}
return -1;

}
console.log(`simple searching of ${target2} index in arr3 is `,simpleSearching(arr3,target2))


//               Set

let set =new Set([1,2,3,4,4,5]);
set.add(6)
console.log("checking if element is present in set",set.has(7))
set.delete(4)
console.log(set)

const array=[1,2,3,3,4,5,5,6,7,8];
let set1=new Set(array);
let array1=[...set1]
console.log("Array1",array1)
let set2=new Set([...array])
console.log("set2",set2)
console.log(set1)


//             Map

let map=new Map([
    ["name1","pratik"],
    ["name2","kedar"]
])

console.log("adding  in map",map.set("name3","hritik"))
console.log("checking in map 'name5' ",map.has("name5"))
map.delete("name1")
console.log(map)
let mapArr=[...map];
// console.log(map.has("R","name1","r"))
console.log(mapArr)

// homeWork

let arr4 = [2,3,4,1,0,1,2,2,3,4,5,10];
function frquencyUsingMap(arr4){
let map2=new Map();
for(let i=0;i<arr4.length;i++){
    
    
    if(!map2.has(arr4[i]))
 {
    map2.set(arr4[i],1)
}
else 
{
     map2.set(arr4[i],map2.get(arr4[i])+1)
}

}
return map2
}
console.log("freq",frquencyUsingMap(arr4))

// question => union


let a1 = [1,2,4,5,6,3], a2= [2,5,6,3,1,3];
let a3=[...a1,...a2];
let set3=new Set([...a3].sort())
console.log("Union",set3)

let arr5=[1,2,3,2,3,5,1,2,3];
// let set4=new Set(...arr5);
// console.log([...set4])
console.log([...new Set(arr5)])

//question Anaram 
// find frequency of all arr6[i]s in a paragraph (only spaces,A-Z,a-z)
const paragraph="Hello how are you How was your day Did you eat how did you find that";
let arr6=paragraph.toLowerCase().split(" ")
let map6=new Map()
console.log(arr6)
for(let i=0;i<arr6.length;i++){
  
//   console.log(arr6[i],arr6[i])

// step 1
    // if(!map6.has(arr6[i])){
    //     map6.set(arr6[i],1)
    // }
    // else {
    //     map6.set(arr6[i],map6.get(arr6[i])+1)
    // }

    // step 2

    map6.set(arr6[i],(map6.get(arr6[i]) || 0)+1)
}

console.log(map6)

//=======================Anagrams==========================

//using Map;

let word1="silent";
let word2="listen";

let anagramMap=new Map();
for(let i=0;i<word1.length;i++){
    
        anagramMap.set(word1[i],(anagramMap.get(word1[i]) ||0)+1)
   
}
console.log(anagramMap)
for(let i=0;i<word2.length;i++){
    if(anagramMap.has(word2[i])){
    anagramMap.set(word2[i],(anagramMap.get(word2[i]))-1)

}

}


// using object
function isAnagram(a,b){

let obj={};
if(word1.length!=word2.length) console.log("length of both words are not equal ",false);

for(let i=0;i<word1.length;i++){
    obj[word1[i]]=(obj[word1[i]] || 0)+1;

}
for(let i=0;i<word2.length;i++){
   if(!obj[word2[i]]) return false
    obj[word2[i]]=obj[word2[i]]-1
}
for(let value of Object.values(obj)) if(value) return false
 return true
}
console.log(isAnagram(word1,word2))

const mySet=new Set([1,2,3,4])
console.log(mySet.add(5))
mySet.delete(2);
console.log(mySet)
for(let val of mySet){
    console.log(val)
}

const myMap = new Map([
  ["name", "Alice"],
  ["age", 25],
]);

for(let [key,val] of myMap){
    console.log(key)
}

function havingTwoCommon(a,b){
  const set=new Set(a);
  return a.some(x=>set.has(x))  


}
console.log(havingTwoCommon([1,2,3],[3,4,5]))

function intersection(a,b){
    return new Set([...a].filter(x=>b.has(x)))

}
console.log(intersection(new Set([1,2,3]),new Set([2,3,4])))

function groupByLength(words){
    const map=new Map();
    for(let word of words){
        let len=word.length
        if(!map.has(len)){
            map.set(len,[])
        }
        else{
            map.get(len).push(word)
        }
    }
    return map


}
console.log(groupByLength(["hi", "a", "bye", "yes", "no", "ok"]))

function firstNonRepeating(a){
    const map=new Map();
    for(let ch of a){
       
           map.set(ch,(map.get(ch)||0)+1)
       }
    for(let key of a){
        if(map.get(key)===1){
            return key
        }
    }
}
console.log(firstNonRepeating("aabbcddjj"))

function uniqueChar(a){
    const set=new Set();
    for(let i=0;i<a.length;i++){
        let store=""
        for(let j=i;j<a.length;j++){
        store+=a[j]
        // console.log(a[j])
        
            set.add(store)
    }
        
    }
    return set
    
}
console.log(uniqueChar("abc"))