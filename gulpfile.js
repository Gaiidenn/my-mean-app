var path = require('path');
var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('buildServer', function () {
	var tsProject = ts.createProject(path.resolve('./server/tsconfig.json'));
	return gulp.src(path.resolve('./server/**/*.ts'))
		.pipe(ts(tsProject))
		.js
		.pipe(gulp.dest(path.resolve('./server')))
});

gulp.task('buildClient', function () {
	var tsProject = ts.createProject(path.resolve('./client/tsconfig.json'));
	return gulp.src(path.resolve('./client/**/*.ts'))
		.pipe(ts(tsProject))
		.js
		.pipe(gulp.dest(path.resolve('./client')))
});
