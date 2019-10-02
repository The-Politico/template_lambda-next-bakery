const open = require('open');
const portfinder = require('portfinder');
const { nextDev } = require('next/dist/cli/next-dev.js');

portfinder.basePort = 3000;

portfinder.getPort((err, port) => {
  if (err) return console.log('Error finding open port...');
  nextDev(['./client', '-p', port]);
  open(`http://localhost:${port}`);
});
