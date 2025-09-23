# stemp

A minimal CLI tool for parsing and converting time strings, built with TypeScript and Bun.

## Features

- Accepts a time string (ISO, Unix timestamp, or milliseconds) as an argument.
- If no argument is provided, uses the current time.
- Outputs the time in multiple formats:
  - ISO 8601
  - Unix timestamp (seconds)
  - Milliseconds since epoch
  - Relative time (e.g., "in 2 hours" or "3 days ago")
- Copies the original or current time string to your clipboard.

## Installation

```
brew tap andenkondor/zapfhahn
brew install andenkondor/zapfhahn/stemp
```

## Usage

```bash
stemp [time-string]
```

- `[time-string]` (optional): A date/time in ISO format, Unix timestamp, or milliseconds. If omitted, the current time is used.

