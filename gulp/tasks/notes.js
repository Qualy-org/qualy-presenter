// Necessary Plugins
const gulp     = require('gulp')

// Move Notes
module.exports = gulp.task('notes', () =>
  gulp.src('src/js/vendor/notes/notes.html')
    .pipe(gulp.dest('build/js/vendor/notes/'))
);
