export class Game {
  public id!: number;
  public reveal_sets!: RevealSet[];
}

export class RevealSet {
  public red!: number;
  public green!: number;
  public blue!: number;
}

export class GameParser {
  public static ParseData(data: string): Game[] {
    const games: Game[] = [];

    for (const line of data.split("\n")) {
      const game = new Game();
      game.reveal_sets = [];

      const gameSep = line.split(": ");
      game.id = parseInt(gameSep[0].substring(gameSep[0].indexOf(" ")));

      for (const revealSet of gameSep[1].split("; ")) {
        const reveal_set = new RevealSet();
        reveal_set.blue = 0;
        reveal_set.green = 0;
        reveal_set.red = 0;

        for (const color of revealSet.split(", ")) {
          const str = color.split(", ");
          const pairs = str[0].split(" ");
          if (pairs[1] === "red") {
            reveal_set.red = parseInt(pairs[0]);
          }
          if (pairs[1] === "green") {
            reveal_set.green = parseInt(pairs[0]);
          }
          if (pairs[1] === "blue") {
            reveal_set.blue = parseInt(pairs[0]);
          }
        }
        game.reveal_sets.push(reveal_set);
      }

      games.push(game);
    }

    return games;
  }
}
