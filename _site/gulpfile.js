//Package Imports
var pkg = require('./package.json'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    myth = require('gulp-myth'),
    cssnano = require('gulp-cssnano');

//run 'gulp css'
gulp.task('css', function() {
    return gulp.src('_site/css/main.css')
    .pipe(myth())
    .pipe(autoprefixer({
        browsers: ['> 1%'],
    }))
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('static/css'));
});

// run 'gulp watch'
gulp.task('watch', function() {
    gulp.watch('_site/css/main.css', ['css']);
});

// Default gulp task that runs when you 'gulp'
gulp.task('default', ['css']);
