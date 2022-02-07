//Countring Letters==================================================

// const input = prompt("write your word here")||  "probandoooo";
// const counterLetters = (str)=>{
//         let solution=""
//         let arr = []
//        let count=0;
//     for (let i = 0; i < str.length; i++) {
//         if(str.charAt(i) === str.charAt(i+1)){
//                count ++;
//            }else{
//                count ++
//                arr.push(count+"x"+str.charAt(i))
//                count=0
//            }

//     }
//     for(j=0;j<arr.length;j++){
//         solution+=arr[j]
//     }

//     console.log(solution)
// }

// counterLetters(input)

// Word Count=======================================================
let input = "Hola, esta esta frase frase es de de de pruebaaaa Hola";
const wordCount = (sentence) => {
   let lower = sentence.toLowerCase();
   let arr = lower.split(/[\t, \n, " ", :,!,.]+/);
   for (let n = 0; n < arr.length; n++) {
       if (arr[n].charAt(0) === "'") {
           console.log(arr[n]);
           arr[n] = arr[n].slice(1, arr[n].length - 1);
           console.log(arr);
       }
   }

   let obj = {};
   let count = 0;
   for (let i = 0; i < arr.length; i++) {
       for (let j = 0; j < arr.length; j++) {
           if (arr[i] === arr[j]) {
               count++;
           }

           if (j === arr.length - 1) {
               if (arr[i] != "&@$%^&" && arr[i] != "") {
                   let prop = arr[i];
                   obj[prop] = count;
               }
               count = 0;
           }
       }
   }
   console.log(JSON.stringify(obj, null, 4));

   return obj;
};

wordCount(input);
