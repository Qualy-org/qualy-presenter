// Necessary Plugins
const gulp    = require('gulp')
    , paths   = require('../paths')
    , deploy  = require('gulp-gh-pages-will');

// Deploy to GitHub
module.exports = gulp.task('deploy-pages', () =>
  gulp.src(paths.deploy.pages)
	.pipe(deploy())
);
