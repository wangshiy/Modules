// This simple example Gulpfile bundles all of the JavaScript,
// but brings the other assets over separately.

const gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  annotate = require('gulp-ng-annotate'),
  babel = require('gulp-babel'),
  templateCache = require('gulp-angular-templatecache');

gulp.task('templates', function () {
  return gulp.src('www/**/*.html')
    .pipe(templateCache('templates.js', { 'module': 'swapp' }))
    .pipe(gulp.dest('www'));
});

gulp.task('js', ['templates'], function () {
  gulp.src(['www/**/*.js', '!www/lib/**/*.js'])
    .pipe(annotate())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('copy', function () {
  gulp.src(['www/**/*.jpg',
    'www/**/*.png',
    'www/**/*.json',
    'www/**/*.css',
    '!www/index.html'])
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['js', 'copy']);

gulp.task('default', ['build']);

// TO CONSIDER:
// Bundle the library JS, instead of loading it from a CDN.
// Bundle the CSS, rather than loading some from a CDN.
// Build and bundle Bootstrap from Less/Sass source, enabling customization.
