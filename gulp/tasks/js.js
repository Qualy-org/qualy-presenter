// Necessary Plugins
const gulp          = require('gulp')
    , plumber       = require('gulp-plumber')
    , paths         = require('../paths')
    , uglify        = require('gulp-uglify');

// Call Uglify and Concat JS
module.exports = gulp.task('js', () =>
  gulp.src(paths.source.js)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest(paths.build.js))
);
