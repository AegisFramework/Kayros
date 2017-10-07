'use strict';

var gulp = require('gulp');
var header = require('gulp-header');
var concat = require('gulp-concat');
var pkg = require('./package.json');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');

var banner = ['/**',
  ' * ==============================',
  ' * Kayros <%= pkg.version %> | <%= pkg.license %> License',
  ' * <%= pkg.homepage %>',
  ' * ==============================',
  ' */',
  '',
  ''].join('\n');

var minBanner = '/* Kayros <%= pkg.version %> | <%= pkg.license %> License | <%= pkg.homepage %> */\n'

gulp.task('default', function() {
  return gulp.src(['src/normalize.css', 'src/grid.css', 'src/scroll.css', 'src/hero.css', 'src/modal.css', 'src/alignment.css', 'src/spacing.css', 'src/navigation.css', 'src/form.css', 'src/circles.css', 'src/code.css', 'src/material-design.css', 'src/scroll.css', 'src/fixes.css'])
    .pipe(concat({ path: 'kayros.css', stat: { mode: '0664' }, newLine: '\r\n\r\n'}))
    .pipe(header(banner, { pkg : pkg }))
    .pipe(gulp.dest('dist/'))
    .pipe(cssnano({zindex: false}))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(header(minBanner, { pkg : pkg }))
    .pipe(gulp.dest('dist/'));
});