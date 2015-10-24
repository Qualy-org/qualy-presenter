'use strict';

// Necessary Plugins
var gulp          = require('gulp')
    ,plumber      = require('gulp-plumber')
    ,paths        = require('../paths')
    ,uglify       = require('gulp-uglify');

// Call Uglify and Concat JS
module.exports = gulp.task('js', function(){
  return gulp.src(paths.source.js)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest(paths.build.js))
});
