var gulp = require('gulp');
var sass = require('gulp-sass')
var watch = require('gulp-watch');
var open = require("gulp-open");
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var connect = require('gulp-connect');


gulp.task('default', function () {
  gulp.src('./*.scss')
    .pipe(watch())
    .pipe(sass())
    .pipe(gulp.dest('./'))
    .pipe(open('', {app: 'Google Chrome', url: 'http://reload.extensions/'}));
});