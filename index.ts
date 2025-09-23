#!/usr/bin/env bun

import { program } from "commander";
import { ParseFixedTimeStringFlow } from "./src/core/ParseFixedTimeStringFlow";

program.argument("[]");
program.parse();

try {
  await new ParseFixedTimeStringFlow(program.args[0]).run();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
