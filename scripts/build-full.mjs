#!/usr/bin/env node
import { spawnSync } from 'node:child_process';

function run(cmd, args, opts = {}) {
  const res = spawnSync(cmd, args, { stdio: 'inherit', shell: process.platform === 'win32', ...opts });
  if (res.status !== 0) {
    console.error(`Command failed: ${cmd} ${args.join(' ')}`);
    process.exit(res.status ?? 1);
  }
}

const isCI = !!process.env.CI || !!process.env.VERCEL;

console.log(`build-full orchestrator: CI=${isCI}`);

// Always build first
run('npm', ['run', 'build']);

if (!isCI) {
  // Local: run preview + prerender for SPA snapshotting
  run('npm', ['run', 'prerender:all']);
} else {
  console.log('CI detected: skipping vite preview/prerender to avoid port binding issues.');
}

// Always generate sitemaps and static route HTMLs
run('node', ['scripts/generate-sitemaps.mjs']);
run('node', ['scripts/generate-route-htmls.cjs']);

console.log('build-full orchestrator completed successfully.');
