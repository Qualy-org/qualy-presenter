'use strict';

// Necessary Plugins
var gulp     = require('gulp')
    ,plumber = require('gulp-plumber')
    ,paths   = require('../paths')
    ,fs      = require('fs')
    ,jade    = require('gulp-jade');

// Call Jade to compile Templates
module.exports = gulp.task('jade', function () {
  return gulp.src(paths.source.files.jade)
    .pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(paths.build.html))
});
