import { select, Separator } from "@inquirer/prompts";
import fs from "node:fs/promises";
import pathModule from "node:path";
import { makeDir, makeFile } from "./make.mjs";
import chalk from "chalk";
import { read } from "./read.mjs";
export async function ls(path) {
    // Listing Folders & Files
    try {
        const files = await fs.readdir(path, { withFileTypes: true });
        const output = files.map((file) => ({
            name: file.isDirectory()
                ? chalk.magenta(`📁 ${file.name}`)
                : file.isFile()
                    ? chalk.gray(`📄 ${file.name}`)
                    : file.name,
            value: file.name,
        }));
        // Selecting folders & files
        const explorer = await select({
            message: `📁 ${path}`,
            choices: [
                { name: "⬅️ Back", value: "__back" },
                { name: "❌ Exit", value: "__exit" },
                { name: "➕ New file", value: "__create" },
                { name: "📂 New directory", value: "__make" },
                new Separator(),
                ...output,
            ],
        });
        // Back & Exit function
        switch (explorer) {
            case "__back":
                const parentDir = pathModule.resolve(path, "..");
                return ls(parentDir);
            case "__exit":
                return process.exit(0);
            case "__create":
                await makeFile(path);
                return ls(path);
            case "__make":
                await makeDir(path);
                return ls(path);
        }
        // Opening folders & files
        const selectedPath = pathModule.join(path, explorer);
        const stats = await fs.stat(selectedPath);
        if (stats.isDirectory()) {
            return ls(selectedPath);
        }
        else {
            return read(selectedPath);
        }
    }
    catch (err) {
        console.error("Error:", err);
    }
}
//# sourceMappingURL=ls.mjs.map