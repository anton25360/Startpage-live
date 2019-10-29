var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
// var babel = require("gulp-babel");

var ts = require("gulp-typescript")
var tsProject=  ts.createProject("tsconfig.json")

//sass compile
function sassCompile(cb) {
    return gulp.src('app/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/css'));
    cb();
}

//typescript + babel compile
function typescript(cb) {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("app/js/dist"))
    cb();
}

//watch
function watch() {
    gulp.watch('app/scss/**/*.scss', sassCompile);
    gulp.watch('app/js/*.ts', typescript);
    // gulp.watch('app/js/*.js', babelCompile);
}

exports.watch = watch;
exports.sass = sassCompile;
exports.ts = typescript;
// exports.sass = babelCompile;
