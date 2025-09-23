import type { ParsedTime } from "./ParsedTime";

type Printer = (s: unknown) => void;

export class TimePrinter {
  private readonly time: ParsedTime;
  private readonly printer: Printer;

  constructor(time: ParsedTime, print: Printer = console.table) {
    this.time = time;
    this.printer = print;
  }

  print() {
    this.printer(this.time);
  }
}
