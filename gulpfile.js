// Call Plugins
var gulp        = require('gulp'),
	gutil       = require('gulp-util'),
	plumber     = require('gulp-plumber'),
	jade        = require('gulp-jade'),
	browserSync = require('browser-sync'),
	uglify      = require('gulp-uglify'),
	concat      = require('gulp-concat'),
	stylus      = require('gulp-stylus'),
	imagemin    = require('gulp-imagemin');

// Call Jade for compile Templates
gulp.task('jade', function(){
	return gulp.src('src/templates/index.jade')
		.pipe(plumber())
		.pipe(jade({pretty: true}))
		.pipe(gulp.dest('build/'))
});

// Call Uglify and Concat JS
gulp.task('js', function(){
	return gulp.src('src/js/**/*.js')
		.pipe(plumber())
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('build/js'))
});

// Call Stylus
gulp.task('stylus', function(){
		gulp.src('src/styl/main.styl')
		.pipe(plumber())
		.pipe(stylus())
		.pipe(gulp.dest('build/css'))
});

// Call Imagemin
gulp.task('imagemin', function() {
	return gulp.src('src/img/**/*')
		.pipe(plumber())
		.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
		.pipe(gulp.dest('build/img'));
});

// Call Watch
gulp.task('watch', function(){
	gulp.watch(['src/templates/**/*.jade', 'src/slides/*.jade'], ['jade']);
	gulp.watch('src/styl/**/*.styl', ['stylus']);
	gulp.watch('src/js/**/*.js', ['js']);
	gulp.watch('src/img/**/*.{jpg,png,gif}', ['imagemin']);
});


gulp.task('browser-sync', function () {
   var files = [
	  'build/**/*.html',
	  'build/css/**/*.css',
	  'build/img/**/*',
	  'build/js/**/*.js'
   ];

   browserSync.init(files, {
	  server: {
		 baseDir: './build/'
	  }
   });
});

// Default task
gulp.task('default', ['js', 'jade', 'stylus', 'imagemin', 'watch', 'browser-sync']);
