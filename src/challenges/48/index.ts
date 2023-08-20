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
  // First I create an array of true boolean from 2 to the target number
  let prime = [];

  // Assume Every number is prime (apart from 0 & 1)

  for (let i = 2; i < n; i++) {
    prime.push(true);
  }

  for (let j = 2; j * j < n; j++) {
    if (prime[j] === true) {
      // if prime[i] is true then it is a prime number
      // therefore its multiples cannot not prime.
      for (let k = j * j; k < n; k = k + j) {
        //Mark all multiples of prime[i] as false as they are not prime.
        prime[k] = false;
      }
    }
  }

  let count = 0;
  // count the number of elements where prime[i] === true;
  for (let l = 2; l < n; l++) {
    if (prime[l] === true) count++;
  }
  return count;
};
