import { getData } from "./data";
import { GameParser } from "./models";

const bootstrap = async () => {
  const data = getData();

  const games = GameParser.ParseData(data);

  const SETTINGS = {
    SUM: 0,
    RED: 12,
    GREEN: 13,
    BLUE: 14,
  };

  games.forEach((game) => {
    let isPossible = true;

    game.reveal_sets.forEach((set) => {
      if (set.red > SETTINGS.RED) {
        isPossible = false;
      }

      if (set.blue > SETTINGS.BLUE) {
        isPossible = false;
      }

      if (set.green > SETTINGS.GREEN) {
        isPossible = false;
      }
    });

    if (isPossible) {
      SETTINGS.SUM += game.id;
    }
  });

  console.log({
    SETTINGS,
  });
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
