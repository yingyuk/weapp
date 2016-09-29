/*
 * @Author: Yuk
 * @Date:   2016-06-21 20:23:01
 * @Last Modified by:   Yuk·
 * @Last Modified time: 2016-09-29 16:58:15
 */

'use strict';
var path = require('path');
let gulp = require('gulp');
let gulpLoadPlugins = require('gulp-load-plugins');
var sass = require('gulp-sass');
var del = require('del');
const $ = gulpLoadPlugins();

gulp.task('sass', function () {
  let src = './app/pages/**/*.scss';
  return gulp.src(src, {
      base: 'pages'
    })
    .pipe(sass().on('error', sass.logError))
    // .pipe($.autoprefixer({
    //   browsers: ['last 27 versions'],
    //   cascade: false
    // }))
    // .pipe($.shorthand())
    // .pipe($.csscomb())
    // .pipe($.csso())
    .pipe($.rename(function (path) {
      // path.dirname += "/ciao";
      // path.basename = 'home';
      path.extname = '.wxss';
    }))
    .pipe(gulp.dest('pages'));
});

gulp.task('html', function () {
  let src = './app/pages/**/*.html';
  return gulp.src(src, {
      base: 'pages'
    })
    // .pipe($.htmlmin({
    //   removeComments: true, //清除HTML注释
    //   collapseWhitespace: true, //压缩HTML
    //   minifyJS: true, //压缩页面JS
    //   minifyCSS: true //压缩页面CSS
    // }))
    .pipe($.rename(function (path) {
      // path.dirname += "/ciao";
      // path.basename = 'home';
      path.extname = '.wxml';
    }))
    .pipe(gulp.dest('pages'));
});

gulp.task('watch', function () {
  var watcherHtml = gulp.watch('./app/pages/**/*.html', ['html']);
  var watcherCss = gulp.watch('./app/pages/**/*.scss', ['sass']);
});

gulp.task('default', ['sass','html','watch']);
