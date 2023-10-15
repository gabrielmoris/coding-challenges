import fs from "fs";
import read from "./utils/readFile";
import readline from "readline";
import util from "util";

export type SolutionFunction = (input: string[], input2?: any) => any;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = util.promisify(rl.question).bind(rl);

async function execute() {
  const dirs = fs
    .readdirSync("./src/challenges", { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name);

  const getChallenge = async () => {
    return await question("Which challenge are you doing?").then((input: string | void) => {
      if (typeof input === "string" && dirs.includes(input)) {
        rl.close();
        return input;
      } else {
        console.log("This folder still wasn't created.");
        getChallenge();
      }
    });
  };

  const challenge = await getChallenge();

  if (!challenge) return;

  let mainInput: any;

  const mod = await import("./challenges/" + challenge + "/index.ts");
  try {
    mainInput = await import("./challenges/" + challenge + "/input.ts");
  } catch {
    console.log("no input.ts provided for Arg 1");
  }

  let secondaryInput: any;

  try {
    secondaryInput = await import("./challenges/" + challenge + "/input2.ts");
  } catch {
    console.log("no input2.ts provided for Arg 1");
  }

  if (secondaryInput) {
    Object.keys(mod).forEach((key, index) => {
      if (typeof mod[key] === "function") {
        const fn = mod[key] as SolutionFunction;
        const start = performance.now();
        const solution = fn(mainInput, secondaryInput);
        const end = performance.now();
        console.log(`${index + 1}. Challenge ${challenge} - ${fn.name}: `, solution);
        console.log(`${index + 1}. Execution took ${(end - start).toPrecision(4)} milliseconds.`);
      }
    });
  } else {
    Object.keys(mod).forEach((key, index) => {
      if (typeof mod[key] === "function") {
        const fn = mod[key] as SolutionFunction;
        const start = performance.now();
        const solution = fn(mainInput);
        const end = performance.now();
        console.log(`${index + 1}. Challenge ${challenge} - ${fn.name}: `, solution);
        console.log(`${index + 1}. Execution took ${(end - start).toPrecision(4)} milliseconds.`);
      }
    });
  }
}

execute();
