var gulp = require('gulp');

gulp.task('thirdparty', function ()
{
    gulp.src('./node_modules/core-js/**/*.js')
        .pipe(gulp.dest('./wwwroot/node_modules/core-js'));

    gulp.src('./node_modules/@angular/**/*.js')
        .pipe(gulp.dest('./wwwroot/node_modules/@angular'));

    gulp.src('./node_modules/zone.js/**/*.js')
        .pipe(gulp.dest('./wwwroot/node_modules/zone.js'));

    gulp.src('./node_modules/systemjs/**/*.js')
        .pipe(gulp.dest('./wwwroot/node_modules/systemjs'));

    gulp.src('./node_modules/reflect-metadata/**/*.js')
        .pipe(gulp.dest('./wwwroot/node_modules/reflect-metadata'));

    gulp.src('./node_modules/rxjs/**/*.js')
        .pipe(gulp.dest('./wwwroot/node_modules/rxjs'));

});

gulp.task('copy', function ()
{
    gulp.src('./app/**/*.*')
        .pipe(gulp.dest('./wwwroot/app'));
});

gulp.task('watch', function ()
{
    gulp.watch('./app/**/*.*', ['copy']);
});
