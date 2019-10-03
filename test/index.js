const fs = require('fs');
const expect = require('expect.js');
const portfinder = require('portfinder');
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const expressServer = require('../bakery');
const cleanBakery = require('../bakery/utils/cleanBakery');

let port;
let server;
const TOKEN = 'Token TESTING';

describe('tests baking', async function() {
  before(async function() {
    cleanBakery();
    process.env.API_VERIFICATION_TOKEN = TOKEN;
    portfinder.basePort = 3333;
    port = await portfinder.getPortPromise().then(p => p);
    server = await expressServer.listen(port, () => console.log(`Bakery server listening on port ${port}!`));
  });

  it('tests the API is OK', async function() {
    const response = await fetch(`http://localhost:${port}/check`, {
      headers: {
        Authorization: `Token ${TOKEN}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then(response => response);
    expect(response.status).to.be(200);
  });

  it('tests the bakery', async function() {
    const response = await fetch(`http://localhost:${port}`, {
      headers: {
        Authorization: `Token ${TOKEN}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify([
        { slug: 'hello', title: 'Hello World!' },
        { slug: 'about', title: 'About' },
      ]),
    })
      .then(response => response);
    expect(response.status).to.be(200);

    let $;
    $ = cheerio.load(fs.readFileSync('tmp/bakery/pages/index.html'));
    expect($('h1').text()).to.be('Home');

    $ = cheerio.load(fs.readFileSync('tmp/bakery/pages/hello/index.html'));
    expect($('h1').text()).to.be('Hello World!');

    $ = cheerio.load(fs.readFileSync('tmp/bakery/pages/hello/amp/index.html'));
    expect($('h1').text()).to.be('AMP: Hello World!');

    $ = cheerio.load(fs.readFileSync('tmp/bakery/pages/about/index.html'));
    expect($('h1').text()).to.be('About');

    $ = cheerio.load(fs.readFileSync('tmp/bakery/pages/about/amp/index.html'));
    expect($('h1').text()).to.be('AMP: About');
  });

  after(function() {
    cleanBakery();
    server.close();
  });
});
