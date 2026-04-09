#!/usr/bin/env node
import { Command } from "commander";
import { ls } from "./ls.mjs";
import { makeDir, makeFile } from "./make.mjs";
import { read } from "./read.mjs";
import { delDir, delFile } from "./delete.mjs";
const program = new Command();
program.name("navi").description("CLI File Manager.").version("1.0.0");
program
    .command("ls <path>")
    .description("List files")
    .action((path) => {
    ls(path);
});
program
    .command("create <path>")
    .description("Create file")
    .action((path) => {
    makeFile(path);
});
program
    .command("make <path>")
    .description("Create directory")
    .action((path) => {
    makeDir(path);
});
program
    .command("read <path>")
    .description("Read file")
    .action((path) => {
    read(path);
});
program
    .command("del <path>")
    .description("Delete file")
    .action((path) => {
    delFile(path);
});
program
    .command("rm <path>")
    .description("Delete directory")
    .action((path) => {
    delDir(path);
});
program.parse();
//# sourceMappingURL=index.js.map