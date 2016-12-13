var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    inlineCSS = require('gulp-inline-css');

gulp.task('scripts', function(){
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('build/js/'));
});

gulp.task('images', function(){
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img/'));
});

gulp.task('inline', function(){
   gulp.src('index.html')
       .pipe(inlineCSS({
           applyStyleTags: true,
           applyLinkTags: true,
           removeStyleTags: true,
           removeLinkTags: true
       }))
       .pipe(gulp.dest('build/'));
});

gulp.task('move-views', function(){
  gulp.src('views/*')
      .pipe(gulp.dest('build/views/'));
});

gulp.task('views-images', function(){
    gulp.src('views/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/views/images/'));
});

gulp.task('default', ['scripts', 'images', 'move-views', 'views-images', 'inline']);
