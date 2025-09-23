import dayjs, { Dayjs, extend } from "dayjs";
import type { ParsedTime } from "./ParsedTime";
import relativeTimePlugin from "dayjs/plugin/relativeTime";
import LocalizedFormat from "dayjs/plugin/LocalizedFormat";
import timezonePlugin from "dayjs/plugin/timezone";
import utcPlugin from "dayjs/plugin/utc";

const UNIX_SECONDS_DIGIT_COUNT = 10;
const LOCAL_TIMEZONE = "europe/berlin";

extend(LocalizedFormat);
extend(relativeTimePlugin);
extend(utcPlugin);
extend(timezonePlugin);

export class TimeParser {
  private readonly time: Dayjs;
  private readonly now: Dayjs;

  constructor(time: string, now?: Date) {
    this.now = dayjs(now);

    if (!time) {
      throw new Error("no time provided");
    }

    if (!isNaN(+time)) {
      this.time =
        time.length === UNIX_SECONDS_DIGIT_COUNT
          ? dayjs.unix(+time)
          : dayjs(+time);
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
      local: this.time.tz(LOCAL_TIMEZONE).format("DD MMMM YYYY, HH:mm:ss"),
      relative: this.now.to(this.time),
    };
  }
}
