/*
 |--------------------------------------------------------------------------
 | Gulpfile.js
 |--------------------------------------------------------------------------
 |
 | Gulp Task Runner
 | Sass Compile & Javascript Uglify builder
 | 
 |
 */

var
  gulp              = require('gulp'),
  sass              = require('gulp-sass'),
  watch             = require('gulp-watch'),
  print             = require('gulp-print'),
  minifycss         = require('gulp-minify-css'),
  plumber           = require('gulp-plumber'),
  rename            = require('gulp-rename'),
  concat            = require('gulp-concat'),
  browserify        = require('browserify'),
  uglify            = require('gulp-uglify'),
  source            = require('vinyl-source-stream')
;

var assets = 'assets/';
// var sassPaths = [
// assets + 'sass/foundation/foundation-sites/scss',
// assets + 'sass/foundation/motion-ui/src',
// ];

gulp.task('default', ['watch', 'sass', 'js']);

//Watch
gulp.task('watch', function() {
  gulp.watch(assets + 'sass/**/**/*.scss', ['sass']);
  gulp.watch(assets + 'sass/**/**/*.sass', ['sass']);
  gulp.watch(assets + 'js/src/**/*.js', ['js']);
});

/*******************************
         CSS
*******************************/
//Sass Task
gulp.task('sass', function() {
return gulp.src(assets + 'sass/application.*')
  .pipe(sass({
    // includePaths: sassPaths,
    // outputStyle: 'compressed'
  }).on('error', sass.logError))
  .pipe(gulp.dest(assets + 'css/'))
  .pipe(print(function(filepath) {
    return "built: " + filepath;
  }))
  .pipe(rename({suffix: '.min'}))
  .pipe(minifycss())
  .pipe(gulp.dest(assets + 'css/'))
  .pipe(print(function(filepath) {
    return "built: " + filepath;
  }))
});

/*******************************
         Javascript
*******************************/
// Js concat
gulp.task('js.concat', function() {
return gulp.src(assets + 'js/src/**/*.js')
  .pipe(plumber())
  .pipe(concat('application.js'))
  .pipe(gulp.dest(assets + 'js/'))
  .pipe(print(function(filepath) {
    return "built: " + filepath;
  }));
});

//Js browserify
gulp.task('js.browserify', ['js.concat'], function() {
return browserify({
  entries: [assets + 'js/application.js']
  })
  .bundle()
  .pipe(source('application.js'))
  .pipe(gulp.dest(assets + 'js/'));
});

//Js uglify
gulp.task('js.uglify', ['js.browserify'], function() { 
return gulp.src(assets + 'js/application.js')
  .pipe(plumber())
  .pipe(uglify({preserveComments: 'some'}))
  .pipe(rename('bundle.js'))
  .pipe(gulp.dest(assets + 'js/'))
  .pipe(print(function(filepath) {
    return "built: " + filepath;
  }));
});

gulp.task('js', ['js.uglify']);