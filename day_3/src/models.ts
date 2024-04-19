export class Line {
  public id!: string;
  public indexValues!: IndexedValue[];
}

export class IndexedValue {
  public startingIndex!: number;
  public endingIndex!: number;
  public isSymbol!: boolean;
  public value!: string;
}

export class LogicFriend {
  public static getSymbolsDict(data: string) {
    const symbolsDict: any[] = [];
    for (const line of data.split("\n")) {
      for (const char of line) {
        let isNotNumber: boolean = false;
        try {
          isNotNumber = isNaN(parseInt(char));
        } catch (error) {
          console.error("NOT A NUMBER");
        }

        if (isNotNumber && char != "." && !symbolsDict.includes(char)) {
          symbolsDict.push(char);
        }
      }
    }
    return symbolsDict;
  }

  public static ParseData(data: string) {}
}
