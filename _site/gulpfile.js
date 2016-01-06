//Package Imports
var pkg = require('./package.json'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano');

//run 'gulp css'
gulp.task('css', function() {
    return gulp.src('_site/css/main.css')
    .pipe(autoprefixer({
        browsers: ['> 1%', 'IE 6', 'IE 7', 'IE 8', 'IE 9', 'IE 10'],
        cascade: false
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
