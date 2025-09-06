#!/usr/bin/env node

/**
 * Simple Monitoring Scheduler
 * Runs monitoring every 4 hours
 */

const { spawn } = require('child_process');
const fs = require('fs');

const MONITORING_INTERVAL = 4 * 60 * 60 * 1000; // 4 hours

class SimpleScheduler {
  constructor() {
    this.isRunning = false;
    this.intervalId = null;
    this.logFile = 'scripts/scheduler.log';
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runMonitoring() {
    this.log('🔄 Running scheduled monitoring check...');
    
    return new Promise((resolve) => {
      const monitor = spawn('node', ['scripts/post-submission-monitor.cjs'], {
        stdio: 'inherit',
        cwd: process.cwd()
      });

      monitor.on('close', (code) => {
        if (code === 0) {
          this.log('✅ Monitoring completed successfully');
        } else {
          this.log(`❌ Monitoring failed with code: ${code}`);
        }
        resolve();
      });
    });
  }

  start() {
    if (this.isRunning) {
      console.log('⚠️ Scheduler already running');
      return;
    }

    this.log('🚀 Starting monitoring scheduler (every 4 hours)');
    
    // Run immediately
    this.runMonitoring();

    // Schedule recurring checks
    this.intervalId = setInterval(() => {
      this.runMonitoring();
    }, MONITORING_INTERVAL);

    this.isRunning = true;

    // Keep process alive
    process.on('SIGINT', () => this.stop());
    process.on('SIGTERM', () => this.stop());
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.log('🛑 Scheduler stopped');
    process.exit(0);
  }
}

const command = process.argv[2];
const scheduler = new SimpleScheduler();

if (command === 'start') {
  scheduler.start();
} else {
  console.log('📊 Monitoring Scheduler');
  console.log('Usage: node scripts/simple-scheduler.cjs start');
}