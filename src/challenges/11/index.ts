console.log(
  "\x1b[44m",
  "\x1b[33m",
  "Given two integers a and b, return the sum of the two integers without using the operators + and -.",
  "\n",
  "Input: a = 1, b = 2 \n Output: 3",
  "\x1b[0m"
);

export const getSum = ({ a }: { a: number }, { b }: { b: number }): any => {
  // //Using Bitwise operators:
  // while (b !== 0) {
  //   // Perform bitwise AND operation between a and b and assign the result to a variable called "carry".
  //   const carry = a & b; // common set bits of a and b
  //   // Perform bitwise XOR operation between a and b and assign the result to a variable called "sum".
  //   a ^= b; // sum of bits of a and b where at least one of the bits is not set
  //   // Shift "carry" to the left by one bit.
  //   b = carry << 1; // carry is shifted by one to add it to the next bit
  //   // If "carry" is not equal to zero, repeat steps 1-3 with "carry" and "sum" until "carry" becomes zero.
  // }
  // return a;

  //==================================================================//

  // Without using bitwise operators:
  let carry = 0;
  while (b !== 0) {
    // Add the two integers, ignoring any carry. This is like adding the digits of two numbers without carrying over any extra value to the next digit.
    const sum = a ^ b;
    console.log("sum: ", sum);
    // Compute the carry, which is the result of multiplying the two integers by 2.
    carry = (a & b) << 1;
    console.log("SUM:", sum, "CARRY", carry);
    // Add the carry to the result of step 1.
    a = sum;

    // Repeat steps 1-3 until the carry is zero.
    b = carry;
  }
  return a;
};
