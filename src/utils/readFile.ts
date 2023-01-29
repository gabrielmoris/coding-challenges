import fs from "fs";
import path from "path";

const read = (filePath: string) => {
  let filename = path.join(__dirname, filePath);
  return fs.readFileSync(filename, "utf8");
};

export default read;
