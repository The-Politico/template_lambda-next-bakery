const process = require('process');
const { nextBuild } = require('next/dist/cli/next-build.js');

process.env.BUILD = 1;

nextBuild(['./client']);
