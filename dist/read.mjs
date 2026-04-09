import fs from "node:fs/promises";
export async function read(path) {
    try {
        let data = await fs.readFile(path, "utf8");
        console.log(`\n📄 ${path}\n`);
        console.log("────────────");
        console.log(data);
        console.log("────────────");
    }
    catch (err) {
        console.error("Error:", err);
    }
}
//# sourceMappingURL=read.mjs.map