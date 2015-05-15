var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var prefix = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var filter = require('gulp-filter');
var notify = require('gulp-notify');


gulp.task('default', ['sass:build']);


gulp.task('sass:build', function() {

    var sassConfig = {
        sourcemap: true,
        bundleExec: true,
        style: 'compact'
    };

    return sass('src/sass/main.scss', sassConfig)
        .on('error', function (err) {
            console.error('Error', err.message);
        })
        .pipe(prefix({ browsers: ["last 2 versions", "> 1%", "ie 9", "safari > 6"] })) // prefix for browsers
        .pipe(sourcemaps.write())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css/'))
        .pipe(filter('**/*.css'))
        .pipe(notify({ message: 'Sass task complete.' }));
});

gulp.task('sass:watch', ['sass:build'], function() {
    gulp.watch('src/sass/**/*.scss', ['sass:build']);
});