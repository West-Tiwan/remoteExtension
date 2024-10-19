const WebSocket = require('ws');
const pty = require('node-pty');
const os = require('os');

const wss = new WebSocket.Server({ port: 8080, host: '0.0.0.0' });

console.log('server started');

wss.on('connection', ws => {
  console.log('Client connected');
  ws.send('Welcome to the remoteExtension!\r\n');
  const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';
  const ptyProcess = pty.spawn(shell, [], {
    name: 'xterm-color',
    cols: 80,
    rows: 24,
    cwd: process.env.HOME,
    env: process.env
  });

  ptyProcess.on('data', data => {
    ws.send(data);
  });

  ws.on('message', msg => {
    ptyProcess.write(msg);
  });

  ws.on('close', () => {
    console.log('client disconnected');
  });
});