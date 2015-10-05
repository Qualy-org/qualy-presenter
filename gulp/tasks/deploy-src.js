'use strict';

// Necessary Plugins
var gulp    = require('gulp')
    ,paths  = require('../paths');

// Deploy to GitHub
module.exports = gulp.task('deploy-src', function () {
  return gulp.src(paths.deploy.src)
    .pipe(deploy({
      branch: 'master'
    }));
});
