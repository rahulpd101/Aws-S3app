import { readFile } from "fs/promises";

export const getFiles = async () => {
  const paths = [];
  for (let i = 1; i < 4; i++) {
    paths.push(`./sample_data/${i}/rand.png`);
  }
  return await Promise.all(paths.map((path) => readFile(path)));
};
