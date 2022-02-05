//Countring Letters==================================================

// const input = prompt("write your word here")||  "probandoooo";
const counterLetters = (str)=>{
        let solution=""
        let arr = []
       let count=0;
    for (let i = 0; i < str.length; i++) {
        if(str.charAt(i) === str.charAt(i+1)){
               count ++;
           }else{
               count ++
               arr.push(count+"x"+str.charAt(i))
               count=0
           }
           
    }
    for(j=0;j<arr.length;j++){
        solution+=arr[j]
    }
    
    console.log(solution)
}

// counterLetters(input)

// Word Count=======================================================
let input="Hola, esta esta frase frase es de de de pruebaaaa"
const wordCount = (input) => {
let arr= input.split("")
 let solution = "";
 let arr2 = [];
 let count = 0;
 for (let i = 0; i < arr.length; i++) {
     if (arr[i] === arr[i+1]) {
         count++;
     } else {
         count++;
         arr2.push(count + "x" + arr[i]);
         count = 0;
     }
 }
 for (j = 0; j < arr.length; j++) {
     solution += arr2[j];
 }

 console.log(solution);
};

wordCount(input);
