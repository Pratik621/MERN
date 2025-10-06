//Method 1
const arrow=(a,b)=>a-b

//write a =n arrow function to check if a numbeer is divsible by 3 or not
//Method 1:-
let arr=[1,23,4,5,6];

const isDivisible=(a)=>{
   if(a%3==0) return true
   else return false;
}
for(let i=0;i<arr.length;i++){
console.log(isDivisible(arr[i]))
}

//Method 2:-
const divisible=(a)=>a%3;
console.log(divisible(6));
console.log(divisible(10))
console.log(divisible(6))

//Not arrow Function do not have their own "this" keyword,they uses parents this 
const student={
    name:"Pratik Mane",
    age:23,
    result1: function(resultStatus){
        
       console.log(this.name+" and his age is "+this.age+" had "+resultStatus+" the exam")
    },

   };
   console.log(student.result1("passed"))


// ========================types of ForEach=========================
/* 1.forEach
   applies the callback function on each elements
   iterative over each element and does not break like other loop
   and does not chamge the orignal array
   forEach method  does not return anything 
   */
  let arr6=[1,2,3,4]
  arr6.forEach((value,index,array)=>{
      value=value*2
      array[index]=value;
      console.log(value,index,array)

  })
  console.log({arr6})
  // Printing Name age age

  let user=[
    {name:"Ramesh",age:30},
    {name:"Nilesh",age:23},
    {name:"Pratik",age:22}
  ];
     user.forEach((value,index,array)=>{
      console.log("Name:",value.name,", Age:",value.age)
  });



  // =================types of Map============================
  // it also use to transform the value
  // map returns an array
let arr7=[1,2,3,4,5]
 let ans= arr7.map((value,index,array)=>{
    return value*value;
 })
  console.log(ans)


// example:=
 let user1=[
    {name:"Ramesh",age:30},
    {name:"Nilesh",age:23},
    {name:"Pratik",age:22}
  ];
  // trnasform the name of each user to uppercase

  user1.map((value,index,array)=>{
        // return {name:value.name.toUpperCase(),age:value.age}
        value.name=value.name.toUpperCase();
  })
  console.log({user1})


//================type of Filter============================
// keeps the elements that passes the condition
// return an array
// doesn't chnage the orignal array
// nums.filer((value,index,array)=>condition )

let nums=[1,2,4,5,12,18,9]
const evenNums=nums.filter((n)=>n%2)
const oddNums=nums.filter((n)=>!(n%9))
console.log({evenNums})
console.log({oddNums})


let names=["pranjal","bhavesh","uday","siddhart","neha"]
const name=names.filter((n)=>n.length>5)
console.log(name)


  let people = [
  {name: "Amit", age: 19},
  {name: "Neha", age: 25}
];
let res=people.map(n=>n.name)
console.log(res)




/* Practice Question */
/* Cricket Team */
const team={
    name:"India",
    players:[{id:1,score:[10,20,30]},{id:3,score:[80,20,57]}],
    addPlayer:function(id,score){
        this.players.push({id:id,score:score})
        return this.players.sort((a,b)=>a.id-b.id)
     },
     score:function(id){
         this.players.forEach(x=>{
            if(x.id===id){
                console.log(x.score)
            }
         })
     },
     playerAvg:function(id){
        let sum=0
        let count=0
        this.players.forEach(x=>{
            if(x.id===id){
                for(let i=0;i<x.score.length;i++){
                    count++;
                    sum+=x.score[i]
                }
                let ans=sum/count
                console.log(ans.toFixed(2))
            }
            
        })
     },
    avgOfTeam:function(){
        let sum=0
        let count=0
        this.players.forEach(x=>{
            for(let i=0;i<x.score.length;i++){
                count++;
               sum+=x.score[i]
            }
        })
        let ans=sum/count
        console.log(ans.toFixed(2))
    },
    topScorer:function(){
        let avg=0
        let highest=0
        let index=0
        let highestIndex=0;
      
        this.players.forEach(x=>{
            let sum=0;
            let n=x.score.length
            for(let i=0;i<x.score.length;i++){
                
                 sum+=x.score[i]
            }
            
            highest=sum/n;
            if(highest>avg){
             index=x;
             highestIndex=this.players.indexOf(index)
            avg=highest;
            }
        })
        
            console.log(`id:${this.players[highestIndex].id},avgScore:${avg.toFixed(2)}`)
    }
   
/* Another Method 
    topScorer:function(){
        let highest=0
        let result=[]
        this.players.forEach(x=>{
           let sum= x.score.reduce((a,b)=>a+b,0);
           let avg=sum/x.score.length;
        if(avg>highest){
            highest=avg;
             result=[{id:x.id,avg:highest.toFixed(2)}]
        }
        else if(highest===avg){
            result.push({id:players.id,avg:avg})
        }
        })
    console.log(result)
} */

    
}
console.log(team.addPlayer(2,[30,29,79]))
team.score(1)
team.playerAvg(3)
team.avgOfTeam()
team.topScorer()

// your code here
let players = [
  { id: 1, score: [10, 20, 30] },
  { id: 2, score: [15, 25, 5] },
  { id: 3, score: [8, 50, 10] }
];
function topBatsmap(players){
const map=new Map();
let matches=players[0].score.length
for(let i=0;i<matches;i++){
    let max=0
    let id=0
    
    players.filter(x=>{
        if(x.score && x.id){
          if(x.score[i]>max){
            max=x.score[i]
            id=x.id
          }
        }
    })
    map.set(id,(map.get(id)||0)+1)
}
console.log(map)
}
topBatsmap(players)