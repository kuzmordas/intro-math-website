const gulp         = require('gulp'),
      sass         = require('gulp-sass'),
      browserSync  = require('browser-sync'),
      autoprefixer = require('gulp-autoprefixer'),
      concat       = require('gulp-concat'),
      uglify       = require('gulp-uglify-es').default;
      imagemin     = require('gulp-imagemin'),
      pngquant     = require('imagemin-pngquant');

gulp.task('sass', function() {
    return gulp.src(['app/sass/**/*.scss',
                     'app/sass/*.scss'])
               .pipe(sass())
               .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
               .pipe(gulp.dest('app/css/'))
               .pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*')
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('scripts', function() {
    return gulp.src(['app/js/index.js'])
               .pipe(concat('utils.js'))
               .pipe(uglify())
               .pipe(gulp.dest('app/js'));
});

gulp.task('watch', ['browser-sync', 'sass', 'scripts'], function() {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', ['scripts']);
    gulp.watch('app/js/*.js', browserSync.reload);
});

gulp.task('build', ['sass', 'scripts', 'img'], function() {
    gulp.src([ 'app/css/**/*'])
      .pipe(gulp.dest('dist/css'))
    gulp.src('app/fonts/**/*')
      .pipe(gulp.dest('dist/fonts'))
    gulp.src('app/js/**/*')
      .pipe(gulp.dest('dist/js'))
    gulp.src('app/*.html')
      .pipe(gulp.dest('dist'));
});