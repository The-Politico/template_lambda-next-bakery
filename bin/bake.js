const path = require('path');
const { nextExport } = require('next/dist/cli/next-export.js');
const { BAKERY_DIR } = require('../config/constants/paths');

nextExport(['./client', '--outdir', path.join(BAKERY_DIR, 'pages')]);
