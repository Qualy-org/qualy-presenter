// Necessary Plugins
const gulp         = require('gulp')
    , paths       = require('../paths')
    , browserSync = require('browser-sync');

// Serve files from /www/
module.exports = gulp.task('browser-sync', () => {
  const files = [
    paths.browserSync.html,
    paths.browserSync.js,
    paths.browserSync.css,
    paths.browserSync.img
  ];

  browserSync.init(files, {
    server: {
      baseDir: paths.build.html
    }
  });
});
