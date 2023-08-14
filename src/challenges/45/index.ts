console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Reverse bits of a given 32 bits unsigned integer.

  Note:
  
  Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
  In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
   
  
  Example 1:
  
  Input: n = 00000010100101000001111010011100
  Output:    964176192 (00111001011110000010100101000000)
  Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
     `,
  "\x1b[0m"
);

export const reverseBits = ([n]: string) => {
  // I transform number to binary
  let bit = Number(n).toString(2);

  // I add 0 at the begginning to make it be 32 bits
  while (bit.length < 32) {
    console.log(bit);
    bit = "0" + bit;
  }

  // I reverse the int, join it and return itn parsed
  return parseInt(bit.split("").reverse().join(""), 2);
};
