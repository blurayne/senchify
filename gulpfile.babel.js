import gulp from 'gulp';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';

gulp.task('build', function(){
    return gulp.src(['src/**/*.js'])
        .pipe(babel({
            "presets": ["es2015"],
            "plugins": ["transform-es2015-modules-commonjs"]
        }))
        .pipe(uglify())
        .pipe(concat('senchify.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulp.series('build'));

