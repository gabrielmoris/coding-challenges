console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Given an integer n, return the number of trailing zeroes in n!.

Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.
`,
  "\x1b[0m"
);

// export const trailingZeroes = (arr: string[]) => {
//   let n = Number(arr[0]);
//   let result = 0;
//   let factorial = factorialize(n);

//   const reversed = factorial.split("").reverse();

//   for (let i = 0; i < reversed.length; i++) {
//     if (reversed[i] !== "0") {
//       break;
//     }
//     result++;
//   }
//   return result;
// };

// const factorialize = (num: number) => {
//   let result = [1];
//   for (let i = 2; i <= num; i++) {
//     let carry = 0;
//     for (let j = 0; j < result.length; j++) {
//       let product = result[j] * i + carry;
//       result[j] = product % 10;
//       carry = Math.floor(product / 10);
//     }
//     while (carry > 0) {
//       result.push(carry % 10);
//       carry = Math.floor(carry / 10);
//     }
//   }
//   return result.reverse().join("");
// };

// Better Approach
// Intuition:
// To find the number of trailing zeros in the factorial of a given number,
// we need to understand that trailing zeros appear when a multiple of 10 is present in the factorial.
// A multiple of 10 can be obtained by multiplying 5 and 2. So, we only need to count the number of 5's
//present in the prime factors of the factorial.

// Approach:
// 1. Initialize a variable res to store the count of trailing zeros, initially set to 0.
// 2. Use a while loop to calculate the number of 5's in the prime factors of n.
// 3. In each iteration, update n by dividing it by 5 using Math.floor(n / 5)
// to count the number of 5's in the current iteration.
// 4. Add the count of 5's to res.
// 5. Continue the loop until n becomes less than or equal to 0.
// 6. Finally, return the value of res, which represents the number of trailing zeros in n!.

// Complexity:
// Time complexity: The time complexity of this approach is O(log(n))
// because in each iteration, we are reducing the value of n by dividing it by 5,
// and this process continues until n becomes less than 5.
// Space complexity: The space complexity is O(1) because we are using
// only a constant amount of extra space to store the res variable.

export const trailingZeroes = ({ n }: { n: number }) => {
  let res = 0;
  while (n > 0) {
    n = Math.floor(n / 5);
    res += n;
  }
  return res;
};
