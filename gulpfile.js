/* eslint-env node */
var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
var prefixer = require("gulp-autoprefixer");
var uglify = require("gulp-uglify");
var imagemin = require("gulp-imagemin");
var exec = require("child_process").exec;

// DEVELOPMENT

//Run Flask server
gulp.task("runServer", function () {
  exec("python gw2botsite.py");
});

//Transpile SCSS & add prefixes
gulp.task("styles", function () {
  gulp
    .src("static/sass/**/*.scss")
    .pipe(sass()).on("error", sass.logError)
    .pipe(prefixer({ browsers: ["last 2 versions"] }))
    .pipe(gulp.dest("static/css"));
});

//Initialize browserSync
gulp.task("browserSync", function () {
  browserSync.init({
    proxy: "localhost:5000",
    //Change this to your local IP or remove it for automatic detection
    host: "192.168.2.202"
  });
});

// Default task: Watch Files For Changes & Reload browser
gulp.task("default", ["runServer", "styles", "browserSync"], function () {
  gulp.watch(["templates/**/*", "static/**/*"]).on("change", browserSync.reload);
  gulp.watch("static/sass/*.scss", ["styles"]);
});

// PRODUCTION

//Copy files to dist/
gulp.task("copyPy", function () {
  gulp
    .src(["gw2botsite.py", "config.py"])
    .pipe(gulp.dest("dist"));
});

gulp.task("copyTemplates", function() {
  gulp
    .src("templates/**/*")
    .pipe(gulp.dest("dist/templates"));
});

gulp.task("imageMin", function() {
  gulp
    .src("static/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/static/img"));
});

//Minify CSS and write sourcemaps for production
gulp.task("stylesDist", function () {
  gulp
    .src("static/sass/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" })).on("error", sass.logError)
    .pipe(prefixer({ browsers: ["last 2 versions"] }))
    .pipe(gulp.dest("dist/static/css"));
});

//Minify JS for production
gulp.task("jsMin", function () {
  gulp
    .src("static/js/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/static/js"));
});

//Put everything together for production
gulp.task("dist", ["copyPy", "copyTemplates", "imageMin", "stylesDist", "jsMin"]);
