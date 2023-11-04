export const containsDuplicate = ({ str }: { str: string }): any => {
  console.log(
    "\x1b[44m",
    "\x1b[33m",
    "Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string.",
    "\n",
    "If there are two or more words that are the same length, return the first word from the string with that length. ",
    "\n",
    "Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example 'Hello world123 567'",
    "\x1b[0m"
  );
  const arrBigWords: string[] = [];
  const arrOfSentence = str.split(" ");

  arrOfSentence.forEach((item) => {
    const splitted = item.split("");
    const cleanStr = splitted.map(onlyLetters);
    arrBigWords.push(cleanStr.join(""));
  });
  console.log(arrBigWords);

  arrBigWords.sort(function (a, b) {
    return b.length - a.length;
  });

  return arrBigWords[0];
};

const regex = /[^a-z A-Z]/;
function onlyLetters(value: string) {
  if (!regex.test(value)) {
    return value;
  }
}
