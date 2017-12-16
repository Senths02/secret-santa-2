'use strict';

var gulp = require('gulp'),
    minifyHTML = require('gulp-minify-html'),
    jshint = require('jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    minifycss = require('gulp-minify-css'),
    cache = require('gulp-cache'),
    del = require('del'),
    browserSync = require('browser-sync').create()

gulp.task('html', function() {
  return gulp.src('src/**/*.html')
    // .pipe(minifyHTML({
    //     conditionals: true,
    //     spare:true
    // }))
    .pipe(gulp.dest('dist/'))
});

gulp.task('scripts', function() {
  return gulp.src(['src/js/**/*.js'])
    .pipe(concat('main.js'))
    .pipe(rename({suffix: '.min'}))
    // .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('styles', function() {
  return gulp.src(['src/css/**/*.css'])
    .pipe(concat('main.css'))
    .pipe(rename({suffix: '.min'}))
    // .pipe(minifycss())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('vendor', function() {
  return gulp.src(['src/vendor/**/*.js'])
    .pipe(concat('vendor.js'))
    .pipe(rename({suffix: '.min'}))
    // .pipe(uglify())
    .pipe(gulp.dest('dist/vendor'))
});

gulp.task('assets', function() {
  return gulp.src(['src/assets/**/*'])
    .pipe(gulp.dest('dist/assets'))
});

gulp.task('serve', function() {

    browserSync.init({
        server: "./dist"
});

// Watch .scss files
    gulp.watch('src/css/*.css', ['styles']);
    // Watch .js files
    gulp.watch('src/js/*.js', ['scripts']);
    // Watch .html files
    gulp.watch('src/*.html', ['html']);
    // Watch libs files
    gulp.watch('src/vendor/*.js', ['vendor']);
        // Watch img files
    gulp.watch('src/assets/*', ['assets']);

    gulp.watch(['dist/**']).on('change', browserSync.reload);
});

gulp.task('clean', function() {
    return del(['dist'])
});

gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'vendor', 'assets', 'html')
});