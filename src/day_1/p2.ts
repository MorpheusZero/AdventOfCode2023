import { p1Data } from "./p1.data";

const job: any = {
  index: {},
};

const numTextDict: any = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

const _getTotalFromTransformedString = (str: string) => {
  let firstDigit = "";
  let firstDigitIndex = -1;

  let secondDigit = "";
  let secondDigitIndex = -1;

  let newStr = str.toString();

  for (const key of Object.keys(numTextDict)) {
    newStr = str.toString().replace(new RegExp(key, "g"), numTextDict[key]);

    // FIRST DIGIT LOOP
    for (const char of newStr) {
      let testValue = -1;

      try {
        testValue = parseInt(char);
      } catch (error: any) {
        console.error(error.message);
      }

      if (testValue && testValue >= 0) {
        const currentIndex = newStr.indexOf(char);

        // dttwonezbgmcseven5seven
        // INDEX: 8.....13

        if (!firstDigit || currentIndex < firstDigitIndex) {
          firstDigit = testValue.toString();
          firstDigitIndex = currentIndex;
        }

        // if (str === "dttwonezbgmcseven5seven") {
        //   console.log({
        //     newStr,
        //     char,
        //     replacing: key,
        //     firstDigit: {
        //       value: firstDigit,
        //       index: firstDigitIndex,
        //     },
        //     secondDigit: {
        //       value: secondDigit,
        //       index: secondDigitIndex,
        //     },
        //     testValue,
        //     currentIndex,
        //   });
        // }
      }
    }

    // SECOND DIGIT LOOP
    const reversedNewStr = newStr.split("").reverse().join("");
    // console.log(reversedNewStr);
    for (const char of reversedNewStr) {
      let testValue = -1;

      try {
        testValue = parseInt(char);
      } catch (error: any) {
        console.error(error.message);
      }

      if (testValue && testValue >= 0) {
        const currentIndex = reversedNewStr.indexOf(char);

        // dttwonezbgmcseven5seven
        // INDEX: 8.....13

        if (!secondDigit || currentIndex < secondDigitIndex) {
          secondDigit = testValue.toString();
          secondDigitIndex = currentIndex;
        }

        // if (str === "dttwonezbgmcseven5seven") {
        //   console.log({
        //     newStr,
        //     char,
        //     replacing: key,
        //     firstDigit: {
        //       value: firstDigit,
        //       index: firstDigitIndex,
        //     },
        //     secondDigit: {
        //       value: secondDigit,
        //       index: secondDigitIndex,
        //     },
        //     testValue,
        //     currentIndex,
        //   });
        // }
      }
    }
  }

  //   if (!secondDigit) {
  //     secondDigit = firstDigit;
  //   }

  return parseInt(firstDigit.toString() + secondDigit.toString());
};

(async () => {
  let REAL_TOTAL = 0;

  let lineIndex = 0;

  for (const itm of p1Data.split("\n")) {
    const total = _getTotalFromTransformedString(itm);
    job.index[lineIndex.toString()] = total;
    REAL_TOTAL += total;
    lineIndex++;
  }

  console.log(`TOTAL: [${REAL_TOTAL}]`);
})();
