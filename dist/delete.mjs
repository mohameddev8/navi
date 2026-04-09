import fs from "fs/promises";
import chalk from "chalk";
export async function delFile(path) {
    try {
        await fs.unlink(path);
        console.log(chalk.green(`${path} has been deleted successfully!`));
    }
    catch (err) {
        console.error("Error:", err);
    }
}
export async function delDir(path) {
    try {
        await fs.rm(path, { recursive: true, force: true });
        console.log(chalk.green(`${path} has been deleted successfully!`));
    }
    catch (err) {
        console.error("Error:", err);
    }
}
//# sourceMappingURL=delete.mjs.map