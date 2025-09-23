import dayjs, { Dayjs, extend } from "dayjs";
import type { ParsedTime } from "./ParsedTime";
import relativeTimePlugin from "dayjs/plugin/relativeTime";
extend(relativeTimePlugin);

export class TimeParser {
  private readonly time: Dayjs;
  private readonly now: Dayjs;

  constructor(time: string, now?: Date) {
    if (!time) {
      throw new Error("no time provided");
    }
    this.now = dayjs(now);

    if (!isNaN(+time)) {
      this.time = time.length === 10 ? dayjs.unix(+time) : dayjs(+time);
      return;
    }

    this.time = dayjs(time);

    if (!this.time.isValid()) {
      throw new Error("invalid time provided");
    }
  }

  getParsedTime(): ParsedTime {
    return {
      unix: this.time.unix(),
      millis: this.time.valueOf(),
      utc: this.time.toISOString(),
      relative: this.time.isBefore(this.now)
        ? this.now.to(this.time)
        : this.now.to(this.time),
    };
  }
}
