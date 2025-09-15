/*1
3 2
4 5 6
10 9 8 7
11 12 13 14 15*/
function alternativeCountPattern(n){
    console.log("Alternative Count Pattern")
let count=1;
for(let i=1;i<=n;i++){
    let empty=[];
    for(let j=1;j<=i;j++){
        empty.push(count);
        count++
    }
    
    if(i%2===0){
        empty.reverse()
    }
    console.log(empty.join(" "))
}
}
alternativeCountPattern(5)

function numberPyramid(n){
console.log("Number Pyramid")
let count=1;
let add=0
for (let i=1;i<=n;i++){
    let empty=[];
    
    for(let j=1;j<=2*i-1;j++){
       empty.push(count);
       count++;
          
}
add++
         let space=""
      for(let k=n-1;k>=i ;k--){
        space+=" "
         }
         console.log(space+empty.join(" "))
          }

}

numberPyramid(5);

function rightAngleNumberTriangle(n){
    console.log("Right Angle Number Trianle")
   console.log("1");
   for(let i=1;i<=n;i++){
    store=""
    for(let j=i;j<=i-1+i;j++){
       store+=j+" "
    }
    console.log(store)
   }


}
rightAngleNumberTriangle(5)

//==================Switch Case==========================
function grade(marks){

switch(true){
    
    case(marks>90): return "Excellent";
    break;
    case(90>=marks && marks>80): return "Good"
    break;
    case(80>=marks && marks>70): return "Average"
    break;
    default: return "Need Progress";
}
}
console.log("Switch Case :")
console.log(grade(72))

function hollowPyramid(n){
    console.log("Hollow Pyramid :")
    for(let i=1;i<=n;i++){
        let arr=[];
        let star=""
        for (j=1;j<=i*2-1;j++){
            if(i<=1) star+="*"
            if(i>=2){ 
                if(j===1 || j===2*i-1){
            star+="*"
        }
            else star+=" "
        }
        
            
        }arr.push(star);

        let space=""
       for(let k=n-i;k>=0;k--){
        space+=" "
       }
       console.log(space+arr.join(" "))
    }
     for(let i=n-1;i>=1;i--){
        let arr=[];
        let star=""
        for (j=1;j<=i*2-1;j++){
            if(i<=1) star+="*"
            if(i>=2){ 
                if(j===1 || j===2*i-1){
            star+="*"
        }
            else star+=" "
        }
        
            
        }arr.push(star);

        let space=""
       for(let k=n-i;k>=0;k--){
        space+=" "
       }
       console.log(space+arr.join(" "))
    }


}
hollowPyramid(5)


function charactersPyramid(n){
    console.log("Alphabets Pyramid Printing :")
    
    for(let i=1;i<=n;i++){
        let m=64
        let arr=[];
        for(let j=1;j<=2*i-1;j++){
            m++;
            
            if(j>i){

                if(i<j){
                    m--;
                    m--;
                    arr.push(String.fromCharCode(m))
                }
            }
           else  arr.push(String.fromCharCode(m))
           
        }
        let space=""
    for(let k=n-i;k>=1;k--){
        space+=" "
    }
    console.log(space+arr.join(" "))
    }

}
charactersPyramid(5)
