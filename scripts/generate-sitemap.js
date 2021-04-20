/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const glob = require('glob');

const HOSTNAME = 'https://pelicin.netlify.app/';
const OUTPUT_PATH = './public/sitemap.txt';

glob('pages/**/*.mdx', function (err, files) {
  if (err) {
    throw err;
  }
  const filteredFiles = files.filter((filePath) => {
    return !filePath.startsWith('pages/sample/');
  });
  const mappedFiles = filteredFiles.map((filePath) => {
    return filePath
      .replace(/^pages[/]/, HOSTNAME)
      .replace(/[/]index[.]mdx/, '')
      .replace(/[.]mdx/, '');
  });

  fs.writeFileSync(OUTPUT_PATH, mappedFiles.join('\n') + '\n');
});
