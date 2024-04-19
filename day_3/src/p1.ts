import { getData } from "./data";
import { LogicFriend } from "./models";

const bootstrap = async () => {
  const data = getData();

  const GLOBAL = {
    CHARS_PER_LINE: data.split("\n")[1].length,
  };

  let symbolsDict: any[] = LogicFriend.getSymbolsDict(data);

  console.log(symbolsDict);
};

bootstrap()
  .then(() => {
    console.log("========");
    console.log("Done...");
    console.log("========");
  })
  .catch((error) => {
    console.error(error.message);
  });
