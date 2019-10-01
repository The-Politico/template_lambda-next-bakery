const process = require('process');
const { nextExport } = require('next/dist/cli/next-export.js');

process.env.BUILD = 1;

const outdir = process.env.LAMBDA ?
  '/tmp/bakery/pages' :
  './tmp/bakery/pages';

nextExport(['./client', '--outdir', outdir]);
