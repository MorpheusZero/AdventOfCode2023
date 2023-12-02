import { p1Data } from "./p1.data";

const _getTotalFromString = (str: string): number => {
  let firstDigit = "";
  let secondDigit = "";

  for (const char of str) {
    let testValue = -1;

    try {
      testValue = parseInt(char);
    } catch (error: any) {
      console.error(error.message);
    }

    if (testValue && testValue >= 0) {
      if (!firstDigit) {
        firstDigit = testValue.toString();
      } else {
        secondDigit = testValue.toString();
      }
    }
  }

  if (!secondDigit) {
    secondDigit = firstDigit;
  }

  return parseInt(firstDigit.toString() + secondDigit.toString());
};

(async () => {
  let total = 0;

  for (const itm of p1Data.split("\n")) {
    total += _getTotalFromString(itm);
  }

  console.log(`TOTAL: [${total}]`);
})();
