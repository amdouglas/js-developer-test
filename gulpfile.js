var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('default', function () {
    return gulp.src('./app/css/spongetest.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'default', 'includes')]
    }))
    .pipe(gulp.dest('./app/css/spongetest-gulp.css'));
});

