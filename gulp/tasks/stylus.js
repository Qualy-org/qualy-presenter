// Necessary Plugins
const gulp     = require('gulp')
    , plumber  = require('gulp-plumber')
    , paths    = require('../paths')
    , stylus   = require('gulp-stylus')
    , cssnano  = require('gulp-cssnano');

// Call Stylus
module.exports = gulp.task('stylus', () =>
  gulp.src(paths.source.styl)
    .pipe(plumber())
    .pipe(stylus({
      compress: true
    }))
    .pipe(cssnano())
    .pipe(gulp.dest(paths.build.css))
);
