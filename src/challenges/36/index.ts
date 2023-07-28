console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

  An input string is valid if:
  
  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.
  Every close bracket has a corresponding open bracket of the same type.
`,
  "\x1b[0m"
);

export const isValid = (arr: string[]) => {
  const s = arr[0];
  const callStack: string[] = [];
  const matches = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  let noClosed = 0;

  s.split("").forEach((item) => {
    if (callStack.length === 0) {
      callStack.push(item);
    } else {
      noClosed = noClosed + check(callStack, item, matches);
    }
  });
  return noClosed === 0 && callStack.length === 0 ? true : false;
};

const check = (callStack: string[], item: string, matches: any) => {
  if (item in matches) {
    callStack.push(item);
    return 0;
  } else {
    if (matches[callStack[callStack.length - 1]] === item) {
      callStack.pop();
      return 0;
    } else {
      return 1;
    }
  }
};
