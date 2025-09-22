#!/usr/bin/env bun

import { program } from "commander";
import { ParseFixedTimeStringFlow } from "./src/core/ParseFixedTimeStringFlow";

program.argument("[]");
program.parse();

await new ParseFixedTimeStringFlow(program.args[0]).run();
