var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');
var del     = require('del');
var minifyHTML = require('gulp-minify-html');
var minifyCSS  = require('gulp-minify-css');
var ghPages = require('gulp-gh-pages');

gulp.task('minify', function () {
  gulp.src('javascript/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('minified/javascript/'));

  gulp.src('./index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./minified/'));

  gulp.src('stylesheet/*.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('./minified/stylesheet/'));

   //Test
   gulp.src('test/*.js')
   .pipe(uglify())
   .pipe(gulp.dest('minified/test/javascript/'));

   gulp.src('test/index.html')
     .pipe(minifyHTML())
     .pipe(gulp.dest('./minified/test'));

   gulp.src('test/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./minified/test/stylesheet/'));

});

gulp.task('clean', function(cb) {
  del(['minified/*'], cb);
});

gulp.task('deploy', function() {
  return gulp.src('./minified/**/*')
    .pipe(ghPages());
});
