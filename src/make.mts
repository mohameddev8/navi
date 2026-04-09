import fs from "node:fs/promises";
import { input } from "@inquirer/prompts";
import pathModule from "node:path";
import chalk from "chalk";
// Creating new file function
export async function makeFile(currentPath: string) {
    const name = await input({
        message: "Enter file name:",
    });
    const content = await input({
        message: "Enter file content:",
    });
    const fullPath = pathModule.join(currentPath, name);
    try {
        await fs.writeFile(fullPath, content);
        console.log(chalk.green(`✔ ${name} created successfully`));
    } catch (err) {
        console.error("Error:", err);
    }
}

// Creating new directory function
export async function makeDir(currentPath: string) {
    const name = await input({
        message: "Enter directory name",
    });
    const fullPath = pathModule.join(currentPath, name);
    try {
        await fs.mkdir(fullPath, { recursive: true });
        console.log(chalk.green(`✔ ${name} created successfully`));
    } catch (err) {
        console.error("Error:", err);
    }
}
