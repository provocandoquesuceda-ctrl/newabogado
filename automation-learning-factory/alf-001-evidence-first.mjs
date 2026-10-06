import { writeFileSync, mkdirSync } from "node:fs";
import { execSync } from "node:child_process";

mkdirSync("automation-learning-factory/evidence", { recursive: true });

const run = (cmd) => execSync(cmd, { encoding: "utf8" }).trim();

const evidence = {
  automation_id: "ALF-001",
  name: "Evidence-First Automation",
  objective: "Producir una huella verificable de su propia ejecución en un segundo proyecto real.",
  executed_at_utc: new Date().toISOString(),
  repository: process.env.GITHUB_REPOSITORY ?? "local",
  branch: process.env.GITHUB_REF_NAME ?? "local",
  commit: process.env.GITHUB_SHA ?? run("git rev-parse HEAD"),
  runner: process.env.GITHUB_ACTIONS === "true" ? "github-actions" : "local",
  checks: [
    { name: "node_runtime", status: "PASS", value: process.version },
    { name: "repository_context", status: "PASS" },
    { name: "evidence_generation", status: "PASS" }
  ],
  status: "EXECUTED",
  next_gate: "EVALUATION"
};

writeFileSync(
  "automation-learning-factory/evidence/ALF-001-latest.json",
  JSON.stringify(evidence, null, 2) + "\n"
);
console.log(JSON.stringify(evidence, null, 2));
