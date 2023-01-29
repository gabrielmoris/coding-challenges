import fs from "fs";
import read from "./utils/readFile";
import readline from "readline";
import util from "util";

export type SolutionFunction = (input: string[]) => string | number;

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
    return await question("Which challenge are you doing?").then(
      (input: string | void) => {
        if (typeof input === "string" && dirs.includes(input)) {
          rl.close();
          return input;
        } else {
          console.log("This folder still wasn't created.");
          getChallenge();
        }
      }
    );
  };

  const challenge = await getChallenge();

  if (!challenge) return;
  const mod = await import("./challenges/" + challenge + "/index.ts");

  const input = read("../challenges/" + challenge + "/input.txt");
  const inputArray = input.split("\n");

  Object.keys(mod).forEach((key, index) => {
    if (typeof mod[key] === "function") {
      const fn = mod[key] as SolutionFunction;
      const start = performance.now();
      const solution = fn(inputArray);
      const end = performance.now();
      console.log(
        `${index + 1}. Challenge ${challenge} - ${fn.name}: `,
        solution
      );
      console.log(
        `${index + 1}. Execution took ${(end - start).toPrecision(
          4
        )} milliseconds.`
      );
    }
  });
}

execute();
