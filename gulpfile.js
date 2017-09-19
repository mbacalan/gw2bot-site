// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./static/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./static/css')) 
});

gulp.task('default', ['sass'], function() {
    gulp.watch('static/scss/*.scss', ['sass']);
})