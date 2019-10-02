const portfinder = require('portfinder');

const server = require('../../bakery');

process.env.LOCAL = 1;

portfinder.basePort = 3333;

portfinder.getPortPromise().then(port => {
  server.listen(port, () => console.log(`Bakery server listening on port ${port}!`));
});
