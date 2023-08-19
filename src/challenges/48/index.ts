console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Given an integer n, return the number of prime numbers that are strictly less than n.

 

Example 1:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
Example 2:

Input: n = 0
Output: 0
Example 3:

Input: n = 1
Output: 0
 
  
     `,
  "\x1b[0m"
);

export const countPrimes = ([number]: string): number => {
  const n = Number(number);
  // There is an ancient algorithm called Sieve of Eratosthenes useful for this specific situation
  // https://es.wikipedia.org/wiki/Criba_de_Erat%C3%B3stenes
  // First I create an array of Numbers from 2 to the target number
  const arrOfNumbers = [];
  for (let i = 2; i <= n; i++) {
    arrOfNumbers.push(i);
  }

  const squared = arrOfNumbers[0];

  // another way to do the array
  // let arrOfNumbers = Array.from({ length: 9 }, (_, i) => i + 2);

  return n;
};
