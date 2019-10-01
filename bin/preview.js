const open = require('open');
const portfinder = require('portfinder');
const StaticServer = require('static-server');

// Don't start up a preview on Lambda
if (process.env.LAMBDA) process.exit(0);

portfinder.basePort = 8000;

portfinder.getPort(function(err, port) {
  if (err) return console.log('Error finding open port...');

  const server = new StaticServer({
    rootPath: './tmp',
    port: 8000,
  });

  server.start(function() {
    const previewRoot = `http://localhost:${server.port}/bakery/pages/`;
    open(previewRoot);
    console.log(`Launching preview at: ${previewRoot}`);
  });
});
