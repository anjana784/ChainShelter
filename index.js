const { spawn } = require('child_process');

// Start the Express API
const apiProcess = spawn('npm', ['start'], { cwd: 'api', stdio: 'inherit' });

// Start the Next.js frontend
const frontendProcess = spawn('npm', ['run', 'dev'], { cwd: 'frontend', stdio: 'inherit' });

// Handle process termination
process.on('SIGINT', () => {
    apiProcess.kill('SIGINT');
    frontendProcess.kill('SIGINT');
    process.exit();
});
