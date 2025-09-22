import { $ } from "bun";
import { ParsedTimePrinter } from "./ParsedTimePrinter";
import { TimeParser } from "./TimeParser";

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

    new ParsedTimePrinter(parsedTime).print();
    await $`echo -n ${timeWithBackup} | pbcopy`;
  }
}
