import { expect, test, describe } from "bun:test";
import { TimeParser } from "../../core/TimeParser";
import dayjs from "dayjs";

describe("TimeParser", () => {
  const now = dayjs("2025-09-22T14:28:09.000Z");
  describe("getParsedTime()", () => {
    test("unix", () => {
      const parsedTime = new TimeParser(
        "1758464889",
        now.toDate(),
      ).getParsedTime();

      expect(parsedTime.unix).toBe(1758464889);
      expect(parsedTime.millis).toBe(1758464889000);
      expect(parsedTime.utc).toBe("2025-09-21T14:28:09.000Z");
      expect(parsedTime.relative).toBe("a day ago");
    });

    test("millis", () => {
      const parsedTime = new TimeParser(
        "1758464889000",
        now.toDate(),
      ).getParsedTime();

      expect(parsedTime.unix).toBe(1758464889);
      expect(parsedTime.millis).toBe(1758464889000);
      expect(parsedTime.utc).toBe("2025-09-21T14:28:09.000Z");
      expect(parsedTime.relative).toBe("a day ago");
    });

    test("utc", () => {
      const parsedTime = new TimeParser(
        "2025-09-21T14:28:09.000Z",
        now.toDate(),
      ).getParsedTime();

      expect(parsedTime.unix).toBe(1758464889);
      expect(parsedTime.millis).toBe(1758464889000);
      expect(parsedTime.utc).toBe("2025-09-21T14:28:09.000Z");
      expect(parsedTime.relative).toBe("a day ago");
    });

    test("future date", () => {
      const parsedTime = new TimeParser(
        now.add(1, "year").toISOString(),
        now.toDate(),
      ).getParsedTime();

      expect(parsedTime.unix).toBe(1790087289);
      expect(parsedTime.millis).toBe(1790087289000);
      expect(parsedTime.utc).toBe("2026-09-22T14:28:09.000Z");
      expect(parsedTime.relative).toBe("in a year");
    });

    test("now", () => {
      const parsedTime = new TimeParser(
        now.toISOString(),
        now.toDate(),
      ).getParsedTime();

      expect(parsedTime.unix).toBe(1758551289);
      expect(parsedTime.millis).toBe(1758551289000);
      expect(parsedTime.utc).toBe("2025-09-22T14:28:09.000Z");
      expect(parsedTime.relative).toBe("a few seconds ago");
    });

    test("invalid", () => {
      expect(() => new TimeParser("abc", now.toDate()).getParsedTime()).toThrow(
        "invalid time provided",
      );
    });

    test("empty", () => {
      expect(() => new TimeParser("", now.toDate()).getParsedTime()).toThrow(
        "no time provided",
      );
    });
  });
});
