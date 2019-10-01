const path = require('path');
const { nextExport } = require('next/dist/cli/next-export.js');
const { BAKERY_DIR } = require('../config/constants/paths');

process.env.BUILD = 1;

nextExport(['./client', '--outdir', path.join(BAKERY_DIR, 'pages')]);
