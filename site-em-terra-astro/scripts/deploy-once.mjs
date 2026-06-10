/**
 * Single deploy path — no robocopy loop.
 * 1. build (+ import:blog)
 * 2. git commit site-em-terra-astro only
 * 3. wrangler pages deploy dist
 * Run: node scripts/deploy-once.mjs
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const REPO = path.dirname(ROOT);

function run(cmd, cwd = ROOT) {
  console.log(`> ${cmd}`);
  execSync(cmd, { cwd, stdio: 'inherit', shell: true });
}

// stamp forces Cloudflare git rebuild when wrangler unavailable
const stamp = new Date().toISOString();
fs.appendFileSync(`${ROOT}/public/.deploy-stamp`, `${stamp}\n`);

run('npm run build');
try {
  run('npm run import:blog');
  run('npm run build');
} catch {
  console.log('import:blog skipped or failed — continuing');
}

process.chdir(REPO);
run('git add site-em-terra-astro/');
try {
  run(`git commit -m "Deploy portfolio texts ${stamp.slice(0, 10)}"`);
} catch {
  console.log('Nothing new to commit');
}
run('git push origin master');

try {
  run(
    'npx wrangler pages deploy site-em-terra-astro/dist --project-name=sestepadesign --branch=master',
    REPO,
  );
} catch (e) {
  console.log('wrangler deploy failed — Cloudflare will build from git push');
}

console.log('\nDONE. Live update via wrangler or Cloudflare git build (~2 min).');
