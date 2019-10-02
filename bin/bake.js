const path = require('path');
const { nextExport } = require('next/dist/cli/next-export.js');
const { BAKERY_DIR } = require('../config/constants/paths');

console.log('BUILD', process.env.BUILD);

nextExport(['./client', '--outdir', path.join(BAKERY_DIR, 'pages')]);
