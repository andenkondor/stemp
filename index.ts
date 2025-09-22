import { program } from "commander";
import { ParseFixedTimeStringFlow } from "./src/core/ParseFixedTimeStringFlow";
import dayjs from "dayjs";

program.argument("[]");
program.parse();

await new ParseFixedTimeStringFlow(program.args[0]).run();
