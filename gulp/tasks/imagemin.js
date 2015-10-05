'use strict';

// Necessary Plugins
var gulp      = require('gulp')
    ,plumber  = require('gulp-plumber')
    ,paths    = require('../paths')
    ,imagemin = require('gulp-imagemin')
    ,cache    = require('gulp-cache');

// Call Imagemin
module.exports = gulp.task('imagemin', function () {
  return gulp.src(paths.source.img)
    .pipe(plumber())
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest(paths.build.img));
});
