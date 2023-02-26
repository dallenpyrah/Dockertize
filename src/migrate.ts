#!/usr/bin/env node
import { execSync } from "child_process";

async function migrate() {
    await execSync("npx prisma migrate dev", { stdio: "inherit" });
}

migrate().catch((e) => console.error(e));
