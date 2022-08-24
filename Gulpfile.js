// Include gulp
const gulp = require('gulp');
const less = require('gulp-less');
//const browserSync = require('browser-sync').create();
//const concat = require('gulp-concat');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const livereload = require('gulp-livereload');
const minifyCss = require('gulp-minify-css');

var pathPHP = 'themes/projectName/**/*.php';
var pathJSMin = 'themes/projectName/assets/js/**/*.js';
var pathJS = 'themes/js/projectName.js';
var pathIconJS = 'themes/js/projectName-icon.js';
var pathSASS = 'themes/less/**/*.less';
var pathCSS = 'themes/projectName/assets/css';

function scripts(){
    return gulp.src(pathJS)
        // .pipe(babel({
        //     presets: ['@babel/env']
        // }))
        .pipe(uglify())
        .pipe(rename('projectName.min.js'))
        .pipe(gulp.dest('themes/projectName/assets/js'))
        .pipe(livereload());
}

function loadIcons(){
    return gulp.src(pathIconJS)
        // .pipe(babel({
        //     presets: ['@babel/env']
        // }))
        .pipe(uglify())
        .pipe(rename('projectName-icon.min.js'))
        .pipe(gulp.dest('themes/projectName/assets/js'))
        .pipe(livereload());
}

function style(){
    return gulp.src(pathSASS)
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(rename('projectName.min.css'))
        .pipe(gulp.dest(pathCSS))
        .pipe(livereload());
}

function watch(){
    livereload.listen(23009);
    gulp.watch(pathSASS, style);
    gulp.watch(pathJS, scripts);
    gulp.watch(pathIconJS, loadIcons);
    gulp.watch(pathPHP).on('change', function(file) {
        livereload.changed(pathPHP);
    });
    gulp.watch(pathJS).on('change', function(file) {
        livereload.changed(pathJS);
    });
    gulp.watch(pathIconJS).on('change', function(file) {
        livereload.changed(pathIconJS);
    });
    gulp.watch(pathJSMin).on('change', function(file) {
        livereload.changed(pathJSMin);
    });
}

exports.style = style;
exports.watch = watch;