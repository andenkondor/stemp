import type { ParsedTime } from "./ParsedTime";

export class ParsedTimePrinter {
  private readonly time: ParsedTime;

  constructor(time: ParsedTime) {
    this.time = time;
  }

  print() {
    console.table(this.time);
  }
}
