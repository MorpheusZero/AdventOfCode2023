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
    let red = 0;
    let green = 0;
    let blue = 0;

    game.reveal_sets.forEach((set) => {
      if (set.red > red) {
        red = set.red;
      }
      if (set.green > green) {
        green = set.green;
      }
      if (set.blue > blue) {
        blue = set.blue;
      }
    });

    const power = red * green * blue;

    SETTINGS.SUM += power;
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
