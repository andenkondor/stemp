import { $ } from "bun";

export class Clipboard {
  static async copy(arg: string | number) {
    if (!arg) {
      throw new Error("no element for copy provided");
    }

    await $`echo -n ${arg} | pbcopy`;
  }
}
