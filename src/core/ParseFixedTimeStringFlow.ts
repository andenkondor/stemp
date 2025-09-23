import { Clipboard } from "./Clipboard";
import { TimeParser } from "./TimeParser";
import { TimePrinter } from "./TimePrinter";

export class ParseFixedTimeStringFlow {
  private readonly providedTimeString: string;
  constructor(providedTimeString: string | undefined) {
    this.providedTimeString = providedTimeString ?? "";
  }

  async run() {
    const timeWithBackup = this.providedTimeString
      ? this.providedTimeString
      : new Date().toISOString();

    const parsedTime = new TimeParser(timeWithBackup).getParsedTime();

    new TimePrinter(parsedTime).print();

    Clipboard.copy(parsedTime.unix);
  }
}
