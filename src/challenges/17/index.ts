console.log(
  "\x1b[44m",
  "\x1b[33m",
  `An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.`,
  `
  Example 1:
  
  Input: s = "anagram", t = "nagaram"
  Output: true
  Example 2:
  
  Input: s = "rat", t = "car"
  Output: false`,
  "\x1b[0m"
);
// Funciona, pero debería buscar hacerlo en O1. Es posible?
export const anagramChecker = (
  { string }: { string: string },
  { anagram }: { anagram: string }
): any => {
  // Much better performant solution
  const sortedS: string = string.split("").sort().join("");
  const sortedT: string = anagram.split("").sort().join("");
  return sortedS === sortedT;
  // let result = true;
  // const str = string[0].split("");
  // const anag = anagram[0].split("");
  // if (str.length !== anag.length) {
  //   result = false;
  // }
  // str.forEach((letter) => {
  //   console.log(anag.includes(letter), letter);
  //   if (anag.includes(letter)) {
  //     const i = anag.indexOf(letter);
  //     if (i > -1) {
  //       const sliced = anag.splice(i, 1);
  //     } else {
  //       result = false;
  //     }
  //     console.log("Sliced", anag);
  //   } else {
  //     result = false;
  //   }
  // });
  // return result;
};
