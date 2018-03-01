// Necessary Plugins
const gulp     = require('gulp')
    , plumber  = require('gulp-plumber')
    , paths    = require('../paths')
    , stylus   = require('gulp-stylus');

// Call Stylus
module.exports = gulp.task('stylus', () =>
  gulp.src(paths.source.files.styl)
    .pipe(plumber())
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest(paths.build.css))
);
