var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('browserify', function() {
	gulp.src('src/js/main.js')
		.pipe(browserify({transform: 'reactify'}))
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('jshint', function () {
	return gulp.src('src/js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
});

gulp.task('default', ['browserify', 'copy']);

gulp.task('watch', ['jshint'], function() {
	gulp.watch('src/**/*.*', ['default']);
});
