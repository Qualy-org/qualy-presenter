const gulp = require('gulp');

// Default task
module.exports = gulp.task('default', ['js', 'pug', 'notes', 'stylus', 'imagemin', 'watch', 'browser-sync', 'js']);
